import { Component } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowDown,
  faPhone,
  faStar,
  faStarHalf,
} from '@fortawesome/free-solid-svg-icons';
import { PublicService } from '@services/Public/public.service';

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

  constructor(public publicService: PublicService) {}

  loadFirstImgMain() {
    this.publicService.imgIndex = true;
  }

  loadSecondImgMain() {
    this.publicService.imgNosotros = true;
  }
}
