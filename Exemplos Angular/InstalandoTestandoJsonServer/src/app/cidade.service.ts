import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Response } from '@angular/http/src/static_response';


@Injectable()
export class CidadeService {

  constructor(private http: Http) { }

  consulta(): Promise<any> {
    return this.http.get('http://localhost:3000/cidades').toPromise().then(response => response.json());
  }

  adicionar(cidade: any): Promise<any> {
    return this.http.post('http://localhost:3000/cidades', cidade).toPromise().then(response => response.json());
  }

  excluir(id: number): Promise<void> {
    return this.http.delete(`http://localhost:3000/cidades/${id}`)
    .toPromise()
    .then(() => null)
  }

}
