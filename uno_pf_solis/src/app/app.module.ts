import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosComponent } from './components/abm-alumnos/abm-alumnos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './modules/material.module';
import { ListaAbmComponent } from './components/lista-abm/lista-abm.component';
import { GridAlumnosComponent } from './components/grid-alumnos/grid-alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToolbarComponent,
    ListaAlumnosComponent,
    AbmAlumnosComponent,
    ListaAbmComponent,
    GridAlumnosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
