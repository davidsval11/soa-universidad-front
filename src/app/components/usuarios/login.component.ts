import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  usuario:Usuario;
  titulo:string='Iniciar sesión';
  constructor(private authService:AuthService, private router:Router) { 
    this.usuario= new Usuario();
  }

  ngOnInit(): void {
  }

  public login():void{
    if(this.usuario.username == null || this.usuario.password == null){
      Swal.fire('Error Login', 'Username o password estan vacios', 'error');
      return;
    }
    this.authService.login(this.usuario).subscribe(response =>{
      this.router.navigate(['home']);
      Swal.fire('Login', `Hola ${response.username}, has iniciado con exito!`,'success');
    });
  }

}