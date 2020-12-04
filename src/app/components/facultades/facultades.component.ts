import { Component, OnInit } from '@angular/core';
import { Facultad } from 'src/app/models/facultad';
import { AuthService } from 'src/app/services/auth.service';
import { FacultadService } from 'src/app/services/facultad.service';
import { CommonListarComponent } from '../common-listar.component';

@Component({
  selector: 'app-facultades',
  templateUrl: './facultades.component.html'
})
export class FacultadesComponent extends CommonListarComponent<Facultad, FacultadService> implements OnInit {

  constructor(service:FacultadService, public authService: AuthService) {
    super(service);
    this.titulo='Facultades';
    this.nombreModel = Facultad.name;
   }

}
