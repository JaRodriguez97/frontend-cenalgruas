import { Component } from '@angular/core';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css'],
})
export class TestimonialsComponent {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  testimonialsArray = [
    {
      nombre: 'Gregg Bergstrom',
      rol: 'Marketing Executive',
      texto: `Tuve una excelente experiencia con Central Nacional de Grúas. Necesitaba un servicio de grúa complejo que varias empresas en Cali rechazaron, pero ellos sí respondieron. Enviaron rápido un técnico, cotizaron justo y cumplieron con puntualidad y profesionalismo. Si buscas grúa en Cali o ayuda vehicular confiable, los recomiendo. ¡Gran atención!`,
      imagen:
        'https://storage.googleapis.com/a1aa/image/ZZTXpyHoYvo8kmRNBqga4BDwjuvePcrqY8_BQ8JOc8w.jpg',
      descripcionImagen:
        'Portrait of Gregg Bergstrom, a young man wearing a beige cap and a beige t-shirt',
    },
    {
      nombre: 'Gregg Bergstrom',
      rol: 'Marketing Executive',
      texto: `De todas las cotizaciones que pedí, Central Nacional de Grúas fue la mejor opción: atención amable, costos claros y tiempo preciso. El servicio de grúa fue impecable, con conductores capacitados y profesionales. Sin duda, una grúa en Cali confiable que recomiendo. ¡Gran opción si buscas grúa 24 horas!`,
      imagen:
        'https://storage.googleapis.com/a1aa/image/ZZTXpyHoYvo8kmRNBqga4BDwjuvePcrqY8_BQ8JOc8w.jpg',
      descripcionImagen:
        'Portrait of Gregg Bergstrom, a young man wearing a beige cap and a beige t-shirt',
    },
    {
      nombre: 'Gregg Bergstrom',
      rol: 'Marketing Executive',
      texto: `Aunque al principio pensé que era costoso, el servicio de grúa valió cada peso: atención excelente, puntualidad y compromiso. El conductor fue muy responsable, cuidando mi vehículo con total profesionalismo. Recomiendo este servicio de grúa en Cali por su calidad, responsabilidad y porque realmente cumplen.`,
      imagen:
        'https://storage.googleapis.com/a1aa/image/ZZTXpyHoYvo8kmRNBqga4BDwjuvePcrqY8_BQ8JOc8w.jpg',
      descripcionImagen:
        'Portrait of Gregg Bergstrom, a young man wearing a beige cap and a beige t-shirt',
    },
  ];
  i = 0;

  constructor() {}

  next() {
    if (this.i < this.testimonialsArray.length - 1) this.i++;
    else if (this.i === this.testimonialsArray.length - 1) this.i = 0;
  }

  prev() {
    if (this.i > 0) this.i--;
    else if (this.i === 0) this.i = this.testimonialsArray.length - 1;
  }
}
