import Nodegit from 'nodegit';
import shelljs from 'shelljs';

const directoriesToPull = ['src/datagen/generated/minecolonies/data/minecolonies/researches'];

export async function initSubmodule(url: string, name: string): Promise<Nodegit.Submodule> {
  const repo = await Nodegit.Repository.open(process.cwd());
  const module = await Nodegit.Submodule.lookup(repo, name);

  shelljs.cd(module.path());
  shelljs.exec('git sparse-checkout init --cone --sparse-index');
  for (const directory of directoriesToPull) {
    shelljs.exec(`git sparse-checkout set '${directory}'`);
  }

  return module;
}
