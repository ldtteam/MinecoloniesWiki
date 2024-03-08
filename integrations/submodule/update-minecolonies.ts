import Nodegit from 'nodegit';

export async function initSubmodule(url: string, name: string): Promise<Nodegit.Submodule> {
  const repo = await Nodegit.Repository.open(process.cwd());

  return await Nodegit.Submodule.lookup(repo, name);
  // await module.init(0);
  // await module.addToIndex(1);
  // await module.open().then((subRepo) => subRepo.fetch('origin'));
  // return module;
}
