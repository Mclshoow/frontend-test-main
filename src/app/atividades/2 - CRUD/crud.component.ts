import { Component, OnInit } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { FormularioComponent } from './formulario/formulario.component';
import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  filtro = new FormControl()

  displayedColumns: string[] = ['actions', 'nome', 'email', 'senha', 'cep', 'logradouro'];

  dataSource = [
    { nome: "Teste1", email: "teste@email1.com", senha: "1234", cep: "80250104", logradouro: "Rua teste" }
  ]

  ngOnInit(): void {
    this.filtro.valueChanges.subscribe(valor => {
      this.filtrar("")
    })
  }

  filtrar(arg: string) {
    console.log("filtrando...") //não remover essa linha
  }

  adicionar() {
    this.dialog.open(FormularioComponent)
  }

  editar(pessoa: Pessoa) {
    this.dialog.open(FormularioComponent)
  }

  remover(pessoa: Pessoa) {
    if (!confirm("Deseja remover a pessoa ${pessoa.nome}")) return

    alert("removido com sucesso!")
  }
}

class Pessoa {
  constructor(nome: string,) { }
}
