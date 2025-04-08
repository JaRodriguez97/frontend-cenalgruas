import { Component } from '@angular/core';

@Component({
  selector: 'app-gruas',
  templateUrl: './gruas.component.html',
  styleUrls: ['./gruas.component.css'],
})
export class GruasComponent {
  servicesArray = [
    {
      nombre: 'Livianos',
      descripcion:
        'Contamos con excelente maquinaria y los mejores precios para asistir de la manera más responsable y capaz los servicios solicitados.',
    },
    {
      nombre: 'medianos',
      descripcion:
        'Te asistirán técnicos capacitados y calificados para brindarte la experiencia de seguridad y responsabilidad que mereces.',
    },
    {
      nombre: 'grandes',
      descripcion:
        'Somos líderes en el mercado debido a nuestra responsabilidad y compromiso con nuestros clientes.',
    },
    {
      nombre: 'maquinaria',
      descripcion:
        'Contamos con aliados estratégicos para transportar su maquinaria sin contratiempo en Central Nacional de Grúas',
    },
    {
      nombre: 'grúa telescópica',
      descripcion:
        'Tenemos una amplia gama de maquinaria a tu disposición para brindarte soluciones oportunas y precisas a tus necesidades.',
    },
    {
      nombre: 'rescates',
      descripcion:
        'Contamos con personal ampliamente capacitado y la maquinaria precisa para llevar a buen término todo tipo de situaciones de rescates.',
    },
  ];
}
