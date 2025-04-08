import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faPhone,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  faArrowDown = faArrowDown;
  faWhatsapp = faWhatsapp;
  faStar = faStar;
  faStarHalf = faStarHalf;
  faPhone = faPhone;
}
