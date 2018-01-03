import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = "Alex";

  adicionar(){
    console.log(this.nome);

  }

  alterarNome(event: any){
    this.nome = event.target.value;
  }

}
