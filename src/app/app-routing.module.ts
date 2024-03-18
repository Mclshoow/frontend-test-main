import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { A11CentralizarComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.1-centralizar/a1.1-centralizar.component';
import { A12ResponsivoComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.2-responsivo/a1.2-responsivo.component';
import { A13ConverterCssComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.3-converter-css/a1.3-converter-css.component';
import { A14ScssFuncaoComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.4-scss-funcao/a1.4-scss-funcao.component';
import { A15ClasseComponent } from './atividades/1 - HTML, SCSS, Typescript/a1.5-classe/a1.5-classe.component';
import { CrudComponent } from './atividades/2 - CRUD/crud.component';

export const routes: Routes = [
  {
    component: A11CentralizarComponent,
    path: 'a11'
  },
  {
    component: A12ResponsivoComponent,
    path: 'a12'
  },
  {
    component: A13ConverterCssComponent,
    path: 'a13'
  },
  {
    component: A14ScssFuncaoComponent,
    path: 'a14'
  },
  {
    component: A15ClasseComponent,
    path: 'a15'
  },
  {
    component: CrudComponent,
    path: 'a2-CRUD'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
