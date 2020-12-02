import { OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import Swal from 'sweetalert2';
import { Generic } from '../models/generic';
import { CommonService } from '../services/common.service';


export abstract class CommonListarComponent<E extends Generic, S extends CommonService<E>> implements OnInit {

  lista!: E[];
  titulo!: string;
  totalRegistros = 0;
  totalPorPagina = 5;
  paginaActual = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  protected nombreModel!: string;
  @ViewChild(MatPaginator) paginador!: MatPaginator;
  constructor(protected service: S) { }


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
        this.lista = p.content as E[]
        this.totalRegistros = p.totalElements as number;
        this.paginador._intl.itemsPerPageLabel = 'Registros por Página';
      });
  }

  public eliminar(entity: E): void {
    Swal.fire({
      title: 'Alerta!',
      text: `Seguro de eliminar a ${entity.nombres}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.eliminar(entity.id).subscribe(() => {
          this.calcularRangos();
          Swal.fire('Eliminado', `${this.nombreModel} ${entity.nombres} eliminado con exito!`, 'success');
        });
      }
    });
  }
}
