import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ProfesorFormComponent } from './components/profesores/profesor-form.component';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { EstudianteFormComponent } from './components/estudiantes/estudiante-form.component';
import { FacultadesComponent } from './components/facultades/facultades.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'profesores', component:ProfesoresComponent},
  {path:'profesores/form', component:ProfesorFormComponent},
  {path:'profesores/form/:id', component:ProfesorFormComponent},
  {path:'estudiantes', component:EstudiantesComponent},
  {path:'estudiantes/form', component:EstudianteFormComponent},
  {path:'estudiantes/form/:id', component:EstudianteFormComponent},
  {path:'facultades', component:FacultadesComponent},
  {path:'evaluaciones', component:EvaluacionesComponent},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
