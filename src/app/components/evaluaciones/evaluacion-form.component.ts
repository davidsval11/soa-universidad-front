import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Evaluacion } from 'src/app/models/evaluacion';
import { Grupo } from 'src/app/models/grupo';
import { AuthService } from 'src/app/services/auth.service';
import { EvaluacionService } from 'src/app/services/evaluacion.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-evaluacion-form',
  templateUrl: './evaluacion-form.component.html'
})
export class EvaluacionFormComponent extends CommonFormComponent<Evaluacion, EvaluacionService> implements OnInit {
  
  error:any;
  grupos:Grupo[];

  constructor(service:EvaluacionService, router:Router, route:ActivatedRoute, public authService: AuthService, private grupoService:GrupoService) {
    super(service, router,route);
    this.titulo='Formulario Evaluaciones';
    this.model=new Evaluacion();
    this.redirect='/evaluaciones';
    this.nombreModel=Evaluacion.name;
  }
 
  ngOnInit(): void {
    this.grupoService.listar().subscribe(grupos => this.grupos=grupos);
    this.editar();
  }

}



