import { CidadeService } from './cidade.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  cidades = [];

  constructor(private cidadeService: CidadeService) { }

  ngOnInit() {
    this.consulta();
  }

  consulta() {
    this.cidadeService.consulta().then(dados => {this.cidades = dados});
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({nome}).then(cidade => {
      alert(`Cidade "${cidade.nome}" adicionada com o codigo ${cidade.id}!`);
      this.consulta(); });
  }

  excluir(id: number) {
    alert(id);
  }

  atualizar(cidade: any) {
    alert(JSON.stringify(cidade));
  }

}
