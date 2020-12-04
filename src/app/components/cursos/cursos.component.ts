import { Component, OnInit, ViewChild } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { AuthService } from 'src/app/services/auth.service';
import { CursoService } from 'src/app/services/curso.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent extends CommonListarComponent<Curso, CursoService> implements OnInit {
  constructor(service:CursoService, public authService: AuthService) {
    super(service);
    this.titulo='Listado Cursos';
    this.nombreModel = Curso.name;
   }
}


