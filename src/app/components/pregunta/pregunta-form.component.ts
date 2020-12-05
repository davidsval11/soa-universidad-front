import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Curso } from 'src/app/models/curso';
import { OpcionPregunta } from 'src/app/models/opcion-pregunta';
import { Pregunta } from 'src/app/models/pregunta';
import { AuthService } from 'src/app/services/auth.service';
import { CursoService } from 'src/app/services/curso.service';
import { PreguntaService } from 'src/app/services/pregunta.service';
import Swal from 'sweetalert2';
import { CommonFormComponent } from '../common-form.component';

@Component({
  selector: 'app-pregunta-form',
  templateUrl: './pregunta-form.component.html'
})
export class PreguntaFormComponent extends CommonFormComponent<Pregunta, PreguntaService> implements OnInit {

  cursos: Curso[];
  pregunta: Pregunta = new Pregunta();
  opcion: OpcionPregunta = new OpcionPregunta();

  constructor(service: PreguntaService, private cursoService: CursoService, router: Router, route: ActivatedRoute, public authService: AuthService) {
    super(service, router, route);
    this.titulo = 'Formulario Departamentos';
    this.model = new Pregunta();
    this.redirect = '/preguntas';
    this.nombreModel = Pregunta.name;
  }

  ngOnInit(): void {
    this.cursoService.listar().subscribe(cursos => this.cursos = cursos);
    this.editar();
  }

  public agregarOpcion(){
    this.model.opciones.push(this.opcion);
  }

  eliminarOpcion(enunciado: string): void {
    this.model.opciones = this.model.opciones.filter((op: OpcionPregunta) => enunciado !== op.enunciado);
  }
}
