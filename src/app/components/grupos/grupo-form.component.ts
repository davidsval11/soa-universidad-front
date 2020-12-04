import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { Grupo } from 'src/app/models/grupo';
import { Profesor } from 'src/app/models/profesor';
import { AuthService } from 'src/app/services/auth.service';
import { CursoService } from 'src/app/services/curso.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html'
})
export class GrupoFormComponent extends CommonFormComponent<Grupo, GrupoService> implements OnInit {
  
  error:any;
  profesores:Profesor[];
  cursos:Curso[];

  constructor(service:GrupoService, router:Router, route:ActivatedRoute, public authService: AuthService, private profesorService:ProfesorService, private cursoService:CursoService) {
    super(service, router,route);
    this.titulo='Formulario Grupos';
    this.model=new Grupo();
    this.redirect='/cursos';
    this.nombreModel=Grupo.name;
  }
 
  ngOnInit(): void {
    this.profesorService.listar().subscribe(profesores => this.profesores=profesores);
    this.cursoService.listar().subscribe(cursos => this.cursos=cursos);
    this.editar();
  }

}


