import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departamento } from 'src/app/models/departamento';
import { Facultad } from 'src/app/models/facultad';
import { AuthService } from 'src/app/services/auth.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-departamento-form',
  templateUrl: './departamento-form.component.html'
})
export class DepartamentoFormComponent extends CommonFormComponent<Departamento, DepartamentoService> implements OnInit {

  error: any;

  facultades: Facultad[];

  constructor(service: DepartamentoService, private facultadService: FacultadService, router: Router, route: ActivatedRoute, public authService: AuthService) {
    super(service, router, route);
    this.titulo = 'Formulario Departamentos';
    this.model = new Departamento();
    this.redirect = '/departamentos';
    this.nombreModel = Departamento.name;
  }

   ngOnInit(): void {
    this.facultadService.listar().subscribe(facultades => this.facultades=facultades);
    this.editar();
  }
}
