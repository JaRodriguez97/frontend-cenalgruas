import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ExperienceComponent } from '@components/experience/experience.component';
import { GruasComponent } from '@components/gruas/gruas.component';
import { HeaderComponent } from '@components/header/header.component';
import { MainComponent } from '@components/main/main.component';
import { ServicesComponent } from '@components/services/services.component';
import { TestimonialsComponent } from '@components/testimonials/testimonials.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { PreguntasComponent } from '@components/preguntas/preguntas.component';
import { FooterComponent } from '@components/footer/footer.component';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    MainComponent,
    ExperienceComponent,
    ServicesComponent,
    TestimonialsComponent,
    GruasComponent,
    PreguntasComponent,
    FooterComponent
  ],
  imports: [CommonModule, LandingRoutingModule, FontAwesomeModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LandingModule {}
