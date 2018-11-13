import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));




  /*
  Module=> all the decl
  Component=> conatin hcl css and logic
  Pipe=> run time manupulation
  Service=> help to connect with third party

  */
