import { AstroIntegration } from 'astro';
import Nodegit from 'nodegit';
import shelljs from 'shelljs';

const name = 'minecolonies';
const directoriesToPull = ['src/datagen/generated/minecolonies/data/minecolonies/researches'];

export function minecoloniesSubmodule(): AstroIntegration {
  return {
    name: 'minecolonies-submodule',
    hooks: {
      'astro:config:setup': async (config) => {
        const repo = await Nodegit.Repository.open(process.cwd());

        const module = await Nodegit.Submodule.lookup(repo, name);
        config.logger.info('Updating Minecolonies submodule:');
        await module.update(1);

        const subRepo = await module.open();

        shelljs.cd(subRepo.path());
        shelljs.exec('git sparse-checkout init --cone --sparse-index');
        for (const directory of directoriesToPull) {
          shelljs.exec(`git sparse-checkout set '${directory}'`);
        }

        await module.update(0);
      }
    }
  };
}
