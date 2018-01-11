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
    this.cidadeService.excluir(id).then(() => {
      alert(`Cidade "${id}" excluida com sucesso!`);
      this.consulta(); });
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade).then(() => {
      alert(`Cidade "${cidade.nome}" alterado com sucesso!`);
      this.consulta(); });

    // alert(JSON.stringify(cidade));
  }

}
