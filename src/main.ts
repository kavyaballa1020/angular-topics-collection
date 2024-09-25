import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, Routes } from '@angular/router';
import { routes } from './app/app.routes'; // Import routes

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)], // Provide the router here
});
