import { Component } from '@angular/core';
import {
  faFacebook,
  faInstagram,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isMenuOpen: boolean = false;
  faBars = faBars;
  faFacebook = faFacebook;
  faTikTok = faTiktok;
  faInstagram = faInstagram;
  
  constructor() {}

  // Abre o cierra el menú
  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
