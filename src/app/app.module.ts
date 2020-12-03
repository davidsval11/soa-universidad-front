import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { ProfesorFormComponent } from './components/profesores/profesor-form.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EstudiantesComponent } from './components/estudiantes/estudiantes.component';
import { FacultadesComponent } from './components/facultades/facultades.component';
import { EvaluacionesComponent } from './components/evaluaciones/evaluaciones.component';
import { EstudianteFormComponent } from './components/estudiantes/estudiante-form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/usuarios/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfesoresComponent,
    ProfesorFormComponent,
    EstudiantesComponent,
    FacultadesComponent,
    EvaluacionesComponent,
    EstudianteFormComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    LayoutModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
