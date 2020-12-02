import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/models/profesor';
import { ProfesorService } from 'src/app/services/profesor.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent extends CommonListarComponent<Profesor, ProfesorService> implements OnInit {
  constructor(service:ProfesorService) {
    super(service);
    this.titulo='Listado Profesores';
    this.nombreModel = Profesor.name;
   }
}
