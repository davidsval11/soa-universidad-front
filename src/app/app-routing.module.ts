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
import { PeriodosAcademicosComponent } from './components/periodos-academicos/periodos-academicos.component';
import { PeriodosAcademicosFormComponent } from './components/periodos-academicos/periodos-academicos-form.component';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DepartamentoFormComponent } from './components/departamentos/departamento-form.component';


const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'login'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  // RUTAS PROFESORES
  {path:'profesores', component:ProfesoresComponent},
  {path:'profesores/form', component:ProfesorFormComponent},
  {path:'profesores/form/:id', component:ProfesorFormComponent},
  // RUTAS ESTUDIANTES
  {path:'estudiantes', component:EstudiantesComponent},
  {path:'estudiantes/form', component:EstudianteFormComponent},
  {path:'estudiantes/form/:id', component:EstudianteFormComponent},
  // RUTAS FACULTADES
  {path:'facultades', component:FacultadesComponent},
  //RUTAS EVALUACIONES
  {path:'evaluaciones', component:EvaluacionesComponent},
  // RUTAS PERIODOS ACADEMICOS
  {path:'periodos-academicos', component:PeriodosAcademicosComponent},
  {path:'periodos-academicos/form', component:PeriodosAcademicosFormComponent},
  {path:'periodos-academicos/form/:id', component:PeriodosAcademicosFormComponent},
  // RUTAS DEPARTAMENTOS
  {path:'departamentos', component:DepartamentosComponent},
  {path:'departamentos/form', component:DepartamentoFormComponent},
  {path:'departamentos/form/:id', component:DepartamentoFormComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
