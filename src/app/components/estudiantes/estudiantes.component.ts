import { Component, OnInit, ViewChild } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})
export class EstudiantesComponent extends CommonListarComponent<Estudiante, EstudianteService> implements OnInit {
  constructor(service:EstudianteService) {
    super(service);
    this.titulo='Listado Estudiantes';
    this.nombreModel = Estudiante.name;
   }
}

