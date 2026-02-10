import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { registerLocaleData } from '@angular/common';

import localeFr from '@angular/common/locales/fr'
import localeJa from '@angular/common/locales/ja';

registerLocaleData(localeFr);
registerLocaleData(localeJa);

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
