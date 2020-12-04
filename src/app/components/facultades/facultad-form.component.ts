import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Facultad } from 'src/app/models/facultad';
import { AuthService } from 'src/app/services/auth.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-facultad-form',
  templateUrl: './facultad-form.component.html'
})
export class FacultadFormComponent extends CommonFormComponent<Facultad, FacultadService> implements OnInit {

  error: any;

  constructor(service: FacultadService, router: Router, route: ActivatedRoute, public authService: AuthService) {
    super(service, router, route);
    this.titulo = 'Formulario Facultades';
    this.model = new Facultad();
    this.redirect = '/facultades';
    this.nombreModel = Facultad.name;
  }
}
