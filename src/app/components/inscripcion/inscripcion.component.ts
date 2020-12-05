import { Component, OnInit, ViewChild } from '@angular/core';
import { CursoService } from 'src/app/services/curso.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Curso } from 'src/app/models/curso';
import { Grupo } from 'src/app/models/grupo';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html'
})
export class InscripcionComponent implements OnInit {

  titulo: string = "Inscripciones";
  lista!: Curso[];
  grupos: Grupo[];
  totalRegistros = 0;
  totalPorPagina = 5;
  paginaActual = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  @ViewChild(MatPaginator) paginador!: MatPaginator;
  constructor(protected service: CursoService) { }

  ngOnInit(): void {
    this.calcularRangos();
  }

  paginar(event: PageEvent): void {
    this.paginaActual = event.pageIndex;
    this.totalPorPagina = event.pageSize;
    this.calcularRangos();
  }

  private calcularRangos() {
    this.service.listarPagina(this.paginaActual.toString(), this.totalPorPagina.toString())
      .subscribe(p => {
        this.lista = p.content as Curso[]
        this.totalRegistros = p.totalElements as number;
        this.paginador._intl.itemsPerPageLabel = 'Registros por Página';
      });
  }

  public listarGrupos(curso:Curso){
    this.grupos = curso.grupos;
  }
}
