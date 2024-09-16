import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app/app.routes';
// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

bootstrapApplication(AppComponent, {
  // providers: [
  //   provideRouter(routes, withInMemoryScrolling({
  //     scrollPositionRestoration: 'enabled',
  //     anchorScrolling: 'enabled',
  //   //  scrollOffset: [0, 64]  // Adjust the offset if you have a fixed header
  //   }))
  // ]
  providers: [
    provideRouter(routes)
  ]
})
.catch(err => console.error(err));