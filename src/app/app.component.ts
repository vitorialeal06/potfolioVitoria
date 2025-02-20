import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

//components
import { HomeComponent } from './modules/portfolio/pages/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
     CommonModule,
     HomeComponent,
    ],
  template:`
  <!-- <router-outlet/>-->
  <app-home />
  `
})
export class AppComponent {}
