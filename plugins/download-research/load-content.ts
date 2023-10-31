import { retry } from '@octokit/plugin-retry';
import { throttling } from '@octokit/plugin-throttling';
import { Octokit } from '@octokit/rest';

import type { FileInfo } from './types';

const MyOctokit = Octokit.plugin(throttling).plugin(retry);

export class ContentLoader {
  private octokit: Octokit;

  constructor(token: string) {
    this.octokit = new MyOctokit({
      auth: token,
      throttle: {
        onRateLimit: (retryAfter: any, options: any) => {
          this.octokit.log.warn(
            `Request quota exhausted for request ${options.method} ${options.url}`
          );

          if (options.request.retryCount === 0) {
            // only retries once
            console.log(`Retrying after ${retryAfter} seconds!`);
            return true;
          }
        },
        onSecondaryRateLimit: (_retryAfter: any, options: any) => {
          // does not retry, only logs a warning
          this.octokit.log.warn(
            `Abuse detected for request ${options.method} ${options.url}`
          );
        }
      }
    });
  }

  private getJsonContent<T = Record<string, string>>(input: string) {
    return JSON.parse(Buffer.from(input, 'base64').toString('binary')) as T;
  }

  public async getFilesInDirectory(path: string) {
    const { data } = await this.octokit.rest.repos.getContent({
      owner: 'ldtteam',
      repo: 'minecolonies',
      path
    });
    const filePaths: string[] = [];
    if (Array.isArray(data)) {
      for (const file of data) {
        if (file.type === 'file') {
          filePaths.push(file.path);
        }
      }
    }
    return filePaths;
  }

  public async getAllJsonFiles<T = Record<string, string>>(
    path: string
  ): Promise<FileInfo<T>[]> {
    const files = await this.getFilesInDirectory(path);

    const promises: Promise<FileInfo<T> | undefined>[] = [];
    for (const file of files) {
      promises.push(this.getJsonFile<T>(file));
    }

    const loadedFiles = await Promise.all(promises);
    return loadedFiles.filter(
      (loadedFile): loadedFile is Awaited<FileInfo<T>> =>
        loadedFile !== undefined
    );
  }

  public async getJsonFile<T = Record<string, string>>(
    path: string
  ): Promise<FileInfo<T> | undefined> {
    const { data } = await this.octokit.rest.repos.getContent({
      owner: 'ldtteam',
      repo: 'minecolonies',
      path
    });
    if (!Array.isArray(data) && data.type === 'file') {
      return {
        filename: data.name,
        content: this.getJsonContent<T>(data.content)
      };
    }
    return undefined;
  }
}
