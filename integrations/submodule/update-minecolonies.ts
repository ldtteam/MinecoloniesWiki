import Nodegit from 'nodegit';
import shelljs from 'shelljs';

export async function initSubmodule(
  name: string,
  directoriesToPull: string[]
): Promise<Nodegit.Submodule> {
  const repo = await Nodegit.Repository.open(process.cwd());

  const module = await Nodegit.Submodule.lookup(repo, name);
  const subRepo = await module.open();

  shelljs.cd(subRepo.path());
  shelljs.exec('git sparse-checkout init --cone --sparse-index');
  for (const directory of directoriesToPull) {
    shelljs.exec(`git sparse-checkout set '${directory}'`);
  }

  return module;
}
