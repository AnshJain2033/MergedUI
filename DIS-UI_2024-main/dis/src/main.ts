import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';


if (environment.production) {
  enableProdMode();
  if(window){
    window.console.log = () => { }
    window.console.warn = () => { }
    window.console.error = () => { }
  }
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
