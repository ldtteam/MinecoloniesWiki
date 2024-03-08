import Nodegit from 'nodegit';

export async function initSubmodule(name: string, branch: string): Promise<Nodegit.Submodule> {
  const repo = await Nodegit.Repository.open(process.cwd());

  const module = await Nodegit.Submodule.lookup(repo, name);
  Nodegit.Submodule.setBranch(repo, name, branch);
  return module;
}
