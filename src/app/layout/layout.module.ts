import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  exports:[NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
