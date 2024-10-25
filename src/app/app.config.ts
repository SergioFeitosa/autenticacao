import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';


const firebaseConfig = {
  apiKey: "AIzaSyBLVSJo6K-rr1aF8EV1_Ij5jiTc-ttwRLk",
  authDomain: "autenticacao-edb67.firebaseapp.com",
  projectId: "autenticacao-edb67",
  storageBucket: "autenticacao-edb67.appspot.com",
  messagingSenderId: "950003310444",
  appId: "1:950003310444:web:f57c7f312ef8644eea1d49",
  measurementId: "G-RQW57RWB17"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideHttpClient(withFetch()),
    provideRouter(routes), 
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth())
  ]
};
