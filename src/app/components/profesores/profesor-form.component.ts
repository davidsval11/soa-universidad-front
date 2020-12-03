import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { AuthService } from 'src/app/services/auth.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-profesor-form',
  templateUrl: './profesor-form.component.html'
})
export class ProfesorFormComponent extends CommonFormComponent<Profesor, ProfesorService> implements OnInit {
  
  error:any;

  constructor(service:ProfesorService, router:Router, route:ActivatedRoute, public authService: AuthService) {
    super(service, router,route);
    this.titulo='Formulario Profesores';
    this.model=new Profesor();
    this.redirect='/profesores';
    this.nombreModel=Profesor.name;
  }

}
