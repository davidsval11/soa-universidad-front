import { Component, OnInit } from '@angular/core';
import { PeriodoAcademico } from 'src/app/models/periodo-academico';
import { AuthService } from 'src/app/services/auth.service';
import { PeriodoAcademicoService } from 'src/app/services/periodo-academico.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-periodos-academicos',
  templateUrl: './periodos-academicos.component.html'
})
export class PeriodosAcademicosComponent extends CommonListarComponent<PeriodoAcademico, PeriodoAcademicoService> implements OnInit {

  constructor(service:PeriodoAcademicoService, public authService: AuthService) {
    super(service);
    this.titulo='Periodos Academicos';
    this.nombreModel = PeriodoAcademico.name;
   }
}
