import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from "@angular/material/dialog"
import { MatTableModule } from '@angular/material/table';
import { A11CentralizarComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.1-centralizar/a1.1-centralizar.component';
import { A12ResponsivoComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.2-responsivo/a1.2-responsivo.component';
import { A13ConverterCssComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.3-converter-css/a1.3-converter-css.component';
import { A14ScssFuncaoComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.4-scss-funcao/a1.4-scss-funcao.component';
import { A15ClasseComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.5-classe/a1.5-classe.component';
import { CrudComponent } from './atividades/2 - CRUD/crud.component';
import { FormularioComponent } from './atividades/2 - CRUD/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    A11CentralizarComponent,
    A12ResponsivoComponent,
    A13ConverterCssComponent,
    A14ScssFuncaoComponent,
    A15ClasseComponent,
    CrudComponent,
    FormularioComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDialogModule,
    // LoremModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }