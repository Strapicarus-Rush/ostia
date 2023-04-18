/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { materialize, map, of } from 'rxjs';
import { AppModule } from './app/app.module';
import { UpperCasePipe } from '@angular/common';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker.register("./service-worker.js");
// }

// self.addEventListener('click', event => {
//   const upperCase = of('1',2).pipe(map((x: any) => x.toUpperCase()));
//   const materialized = upperCase.pipe(materialize());
//   materialized.subscribe(x => console.log(x));
// });
  // if ('serviceWorker' in navigator) {
  //   window.addEventListener('load', function() {
  //     navigator.serviceWorker.register('/service-worker.js');
  //   });
  // }