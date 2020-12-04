import { Component, OnInit } from '@angular/core';
import { Departamento } from 'src/app/models/departamento';
import { AuthService } from 'src/app/services/auth.service';
import { DepartamentoService } from 'src/app/services/departamento.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html'
})
export class DepartamentosComponent extends CommonListarComponent<Departamento, DepartamentoService> implements OnInit {

  constructor(service:DepartamentoService, public authService: AuthService) {
    super(service);
    this.titulo='Departamentos';
    this.nombreModel = Departamento.name;
   }
}
