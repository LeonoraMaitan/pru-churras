import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  tamanho = 6;
  valorAtual = 0;
  imagesDados = [
    'assets/assets/dice-red.png',
    'assets/assets/dice.gif'
  ]
  imagemDado = this.imagesDados[0];
  constructor() { }

  jogarDado() {
    this.valorAtual = 0;
    this.imagemDado = this.imagesDados[1];
    setTimeout(() => {
      this.valorAtual = Math.floor(Math.random() * this.tamanho) + 1;
    }, 1000);
  }

}
