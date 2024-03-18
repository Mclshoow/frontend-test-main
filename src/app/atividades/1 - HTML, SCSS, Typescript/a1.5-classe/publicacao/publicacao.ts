export class Publicacao {
  constructor(
    public readonly titulo: string,
    public readonly autor: string,
    public readonly anoPublicacao: number
  ) { }

  descricao(): string {
    return `Titulo: ${this.titulo}, Autor: ${this.autor}, Ano de Publicação: ${this.anoPublicacao}`;
  }
}

class Livro extends Publicacao {
  constructor(titulo: string, autor: string, anoPublicacao: number, public readonly ISBN: string) {
    super(titulo, autor, anoPublicacao);
  }

  descricao(): string {
    return `${super.descricao()}, ISBN: ${this.ISBN}`;
  }
}

class Periodico extends Publicacao {
  constructor(
    titulo: string,
    autor: string,
    anoPublicacao: number,
    public readonly ISSN: string
  ) {
    super(titulo, autor, anoPublicacao);
  }

  descricao(): string {
    return `${super.descricao()}, ISSN: ${this.ISSN}`;
  }
}

const livro = new Livro("Teste A1.5-Classe", "Marcelo Augusto", 2024, "40028922");
console.log(livro.descricao());

const periodico = new Periodico("Nature", "Various", 1869, "0028-0836");
console.log(periodico.descricao());
