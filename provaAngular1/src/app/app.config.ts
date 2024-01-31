import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
     provideClientHydration(),
      provideAnimations()]
    };
