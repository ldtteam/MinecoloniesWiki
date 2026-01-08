import http from 'node:http';

import { dev } from 'astro';

console.log('Starting dev server...');

const devServer = await dev({
  root: '.',
  logLevel: 'silent',
  server: {
    host: '127.0.0.1'
  }
});

console.log(`Server started at http://localhost:${devServer.address.port}`);

// Use Node's http module to make the request
const makeRequest = () => {
  return new Promise<string>((resolve, reject) => {
    const req = http.get(
      {
        hostname: 'localhost',
        port: devServer.address.port,
        path: '/scripts/generate-icons',
        headers: {
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        }
      },
      (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          resolve(data);
        });
      }
    );

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
};

await makeRequest();
await devServer.stop();
