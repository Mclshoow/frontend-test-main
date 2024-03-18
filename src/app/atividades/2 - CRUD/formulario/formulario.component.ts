import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {  
  constructor(private http: HttpClient) { }

  form = new FormGroup({
    nome: new FormControl("Nome", []),
    email: new FormControl("meuemail", []),
    senha: new FormControl("password", []),
    cep: new FormControl("", []),
    logradouro: new FormControl("", []),
  })

  ngOnInit(): void {
  }

  buscarCep(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    return this.http.get(url);
  }
}
