import { Component, OnInit, ViewChild } from '@angular/core';
import { Evaluacion } from 'src/app/models/evaluacion';
import { AuthService } from 'src/app/services/auth.service';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-evaluaciones',
  templateUrl: './evaluaciones.component.html'
})
export class EvaluacionesComponent extends CommonListarComponent<Evaluacion, EvaluacionService> implements OnInit {
  constructor(service:EvaluacionService, public authService: AuthService) {
    super(service);
    this.titulo='Listado Evaluaciones';
    this.nombreModel = Evaluacion.name;
   }
}


