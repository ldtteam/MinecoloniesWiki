import { type Loader } from 'astro/loaders';
import type { z } from 'astro/zod';
import path from 'path';

import { citizenNamesPackSchema } from '../schemas/citizen_names';
import {
  configurationSchema,
  configurationSchemaWithoutVersion,
  type ConfigurationTypeValue
} from '../schemas/configuration';
import type { Translations } from '../schemas/translations';
import { getAllNamespacesInFolder, getTranslations, getVersionsFromFile } from '../util/file-loaders';
import { exists, getJsonFile } from '../util/files';
import { getVersionCollectionId } from '../util/version';

function parseDescription(value: ConfigurationTypeValue, translations: Translations) {
  if (value.type === 'config') {
    value.description = value.description ? translations[value.description] : undefined;
  } else {
    for (const child of value.children) {
      parseDescription(child, translations);
    }
  }
}

export function configurationLoader(): Loader {
  return {
    name: 'configuration-loader',
    schema: citizenNamesPackSchema,
    load: async (context) => {
      context.store.clear();

      const versions = await getVersionsFromFile();
      for (const version of versions) {
        const submodule = version.submodule;

        const translations = await getTranslations(submodule);

        const configurationsBasePath = `./generator/versions/${submodule}/output/config`;
        if (!(await exists(configurationsBasePath))) {
          context.logger.warn(
            `Configurations path does not exist for version ${version.id}: ${configurationsBasePath}`
          );
          continue;
        }

        const namespaces = await getAllNamespacesInFolder(configurationsBasePath);

        for (const namespace of namespaces) {
          const namespacePath = path.join(configurationsBasePath, namespace);
          const id = getVersionCollectionId(namespace, version);
          const configFile = await getJsonFile(
            configurationSchemaWithoutVersion,
            path.resolve(namespacePath, 'configuration.json')
          );

          const data = await context.parseData<z.infer<typeof configurationSchema>>({
            id,
            data: {
              ...configFile,
              modId: namespace,
              baseId: namespace,
              version: {
                id: version.id,
                collection: 'versions'
              }
            }
          });

          for (const type of data.types) {
            for (const value of type.values) {
              parseDescription(value, translations);
            }
          }

          const digest = context.generateDigest(data);
          context.store.set({
            id,
            data,
            digest
          });
        }
      }

      context.logger.info(`Loaded ${context.store.keys().length} configuration files`);
    }
  };
}
