import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Pessoa {
  nome: string;
  email: string;
  senha: string;
  cep: string;
  logradouro: string;
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  pessoas: Pessoa[] = [];
  form!: FormGroup;

  constructor(private http: HttpClient, @Inject(MAT_DIALOG_DATA) public pessoa: Pessoa, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
      email: new FormControl("", [Validators.required, Validators.email]),
      senha: new FormControl("", [Validators.required]),
      cep: new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
      logradouro: new FormControl({ value: "", disabled: true }, [Validators.required]),
    });
  }

  buscarCep(cep: string) {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    this.http.get(url).subscribe((data: any) => {
      this.form.get('logradouro')?.setValue(data.logradouro);
    });
  }

  adicionarPessoa() {
    if (this.form.valid) {
      try {
        const pessoa: Pessoa = {
          nome: this.form.get('nome')!.value!,
          email: this.form.get('email')!.value!,
          senha: this.form.get('senha')!.value!,
          cep: this.form.get('cep')!.value!,
          logradouro: this.form.get('logradouro')!.value!
        };
        this.pessoas.push(pessoa);

        this.form.reset();
      }
      catch (err) {
        console.log('Erro ao enviar o formulário!', err);
      }
    } else {
      alert('Formulário inválido!');
    }
  }

  editarPessoa(pessoaEditar: Pessoa) {
    this.form.patchValue({
      nome: pessoaEditar.nome,
      email: pessoaEditar.email,
      senha: pessoaEditar.senha,
      cep: pessoaEditar.cep,
      logradouro: pessoaEditar.logradouro
    })
  }
}
