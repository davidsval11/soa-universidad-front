import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from 'src/app/services/estudiante.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-estudiante-form',
  templateUrl: './estudiante-form.component.html',
  styles: [
  ]
})
export class EstudianteFormComponent extends CommonFormComponent<Estudiante, EstudianteService> implements OnInit {
  
  error:any;

  constructor(service:EstudianteService, router:Router, route:ActivatedRoute) {
    super(service, router,route);
    this.titulo='Formulario Estudiantes';
    this.model=new Estudiante();
    this.redirect='/estudiantes';
    this.nombreModel=Estudiante.name;
  }

}
