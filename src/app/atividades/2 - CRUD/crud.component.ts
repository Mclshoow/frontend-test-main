import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { FormularioComponent } from './formulario/formulario.component';
//import { asLiteral } from '@angular/compiler/src/render3/view/util';
import { FormControl } from '@angular/forms';

interface Pessoa {
  nome: string;
  email: string;
  senha: string;
  cep: string;
  logradouro: string;
}

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
    const dialogRef = this.dialog.open(FormularioComponent);
    dialogRef.componentInstance?.editarPessoa(pessoa);
  }

  remover(pessoa: Pessoa) {
    if (!confirm(`Deseja remover a pessoa ${pessoa.nome}`)) return

    alert("Removido com sucesso!")
  }
}
