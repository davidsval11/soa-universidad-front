import { Component, OnInit, ViewChild } from '@angular/core';
import { Grupo } from 'src/app/models/grupo';
import { AuthService } from 'src/app/services/auth.service';
import { GrupoService } from 'src/app/services/grupo.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html'
})
export class GruposComponent extends CommonListarComponent<Grupo, GrupoService> implements OnInit {
  constructor(service:GrupoService, public authService: AuthService) {
    super(service);
    this.titulo='Listado Grupos';
    this.nombreModel = Grupo.name;
   }
}


