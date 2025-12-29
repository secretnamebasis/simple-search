import { createSettingsManager } from './settings.js';
import { createGnomonManager } from './gnomon.js';
import { createReadMe } from './readme.js';

export const managers = {
  settings: {
    create: createSettingsManager
  },
  gnomon: {
    create: createGnomonManager
  },
  readme: {
    create: createReadMe
  }
};

