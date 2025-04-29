import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})
export class ExperienceComponent {
  experienceArray = [
    {
      number: 15,
      description:
        'Años de experiencia realizando servicios de grúas a nivel nacional.',
    },
    {
      number: 20000,
      description: 'Servicios de grúa realizados con éxito en todo el país.',
    },
    {
      number: 200,
      description:
        'Contratos corporativos que han confiado en nuestra eficiencia y seguridad.',
    },
  ];
}
