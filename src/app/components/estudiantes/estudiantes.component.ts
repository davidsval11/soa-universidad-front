import { Component, OnInit, ViewChild } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';
import { AuthService } from 'src/app/services/auth.service';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html'
})
export class EstudiantesComponent extends CommonListarComponent<Estudiante, EstudianteService> implements OnInit {
  constructor(service:EstudianteService, public authService: AuthService) {
    super(service);
    this.titulo='Listado Estudiantes';
    this.nombreModel = Estudiante.name;
   }
}

