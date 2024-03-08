import Nodegit from 'nodegit';
import shelljs from 'shelljs';

export async function initSubmodule(
  name: string,
  branch: string,
  directoriesToPull: string[]
): Promise<Nodegit.Submodule> {
  const repo = await Nodegit.Repository.open(process.cwd());

  const module = await Nodegit.Submodule.lookup(repo, name);
  Nodegit.Submodule.setBranch(repo, name, branch);
  const subRepo = await module.open();
  await subRepo.fetchAll();

  shelljs.cd(module.path());
  shelljs.exec('git sparse-checkout init --cone --sparse-index');
  for (const directory of directoriesToPull) {
    shelljs.exec(`git sparse-checkout set '${directory}'`);
  }

  await subRepo.checkoutBranch(branch);
  return module;
}
