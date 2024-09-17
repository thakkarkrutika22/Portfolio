import { Component } from '@angular/core';
import { provideRouter, Router, RouterLink, RouterModule, RouterOutlet, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from "./projects/projects.component";
import { ContactComponent } from "./contact/contact.component";
import { NavbarComponent } from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, AboutComponent, ProjectsComponent, ContactComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio-app';
}
