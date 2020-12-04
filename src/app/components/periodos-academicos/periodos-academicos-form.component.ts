import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodoAcademico } from 'src/app/models/periodo-academico';
import { AuthService } from 'src/app/services/auth.service';
import { PeriodoAcademicoService } from 'src/app/services/periodo-academico.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-periodos-academicos-form',
  templateUrl: './periodos-academicos-form.component.html'
})

export class PeriodosAcademicosFormComponent extends CommonFormComponent<PeriodoAcademico, PeriodoAcademicoService> implements OnInit {

  error: any;

  constructor(service: PeriodoAcademicoService, router: Router, route: ActivatedRoute, public authService: AuthService) {
    super(service, router, route);
    this.titulo = 'Formulario Periodos Academicos';
    this.model = new PeriodoAcademico();
    this.redirect = '/periodos-academicos';
    this.nombreModel = PeriodoAcademico.name;
  }

}