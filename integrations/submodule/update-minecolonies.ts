import Nodegit from 'nodegit';

export async function initSubmodule(url: string, name: string): Promise<Nodegit.Submodule> {
  const repo = await Nodegit.Repository.open(process.cwd());

  const module = await Nodegit.Submodule.lookup(repo, name);
  const subRepo = await module.open();
  await subRepo.fetchAll();
  await subRepo.checkoutBranch('version/main');
  return module;
}
