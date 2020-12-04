import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { AuthService } from 'src/app/services/auth.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html'
})
export class PreguntaComponent extends CommonListarComponent<Pregunta, PreguntaService> implements OnInit {

  constructor(service: PreguntaService, public authService: AuthService) {
    super(service);
    this.titulo = 'Preguntas';
    this.nombreModel = Pregunta.name;
  }
}
