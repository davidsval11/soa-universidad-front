import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Departamento } from 'src/app/models/departamento';
import { PeriodoAcademico } from 'src/app/models/periodo-academico';
import { AuthService } from 'src/app/services/auth.service';
import { CursoService } from 'src/app/services/curso.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { PeriodoAcademicoService } from 'src/app/services/periodo-academico.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-curso-form',
  templateUrl: './curso-form.component.html'
})
export class CursoFormComponent extends CommonFormComponent<Curso, CursoService> implements OnInit {
  
  error:any;
  departamentos:Departamento[];
  periodosAcademicos:PeriodoAcademico[];

  constructor(service:CursoService, router:Router, route:ActivatedRoute, public authService: AuthService, private departamentoService:DepartamentoService, private periodoAcademicoService:PeriodoAcademicoService) {
    super(service, router,route);
    this.titulo='Formulario Cursos';
    this.model=new Curso();
    this.redirect='/cursos';
    this.nombreModel=Curso.name;
  }
 
  ngOnInit(): void {
    this.departamentoService.listar().subscribe(departamentos => this.departamentos=departamentos);
    this.periodoAcademicoService.listar().subscribe(periodosAcademicos => this.periodosAcademicos=periodosAcademicos);
    this.editar();
  }

}

