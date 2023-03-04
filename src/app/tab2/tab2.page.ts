import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //Declaração das variaveis
  valendo = 1;
  ptime1 = 0;
  ptime2 = 0;

  time1 = 0;
  time2 = 0;

  constructor(private alertController: AlertController) {}


  async mostrarTruco(message ='') {
    const alert = await this.alertController.create({
      header: 'Truco marreco',
      buttons: ['OK'],
    });
      await alert.present();
  }

  async pecaSeis() {
    const alert = await this.alertController.create({
      header: 'Pede seis seu ruim',
      buttons: ['OK'],
    });
      await alert.present();
  }

  valendo1(){
    this.valendo = 1;
  }

  valendo3(){
    if(this.valendo >= 3){
      this.pecaSeis()
    }else{
      this.valendo = 3;
      this.mostrarTruco()
    }
  }

  valendo6(){
    this.valendo = 6;
  }

  valendo9(){
    this.valendo = 9;
  }

  valendo12(){
    this.valendo = 12;
  }

  somaTimeUm(){
    this.ptime1 += this.valendo;
    this.valendo = 1;
    if(this.ptime1 >= 12){
      this.time1 += 1;
      this.ptime1 = 0;
      this.ptime2 = 0;
    }
  }

  somaTimeDois(){
    this.ptime2 += this.valendo;
    this.valendo = 1;
    if(this.ptime1 >= 12){
      this.time1 += 1;
      this.ptime1 = 0;
      this.ptime2 = 0;
    }
  }

  subTimeUm(){
    this.ptime1 -= this.valendo;
    if(this.ptime1 < 0){
      this.ptime1 = 0
    }
  }

  subTimeDois(){
    this.ptime2 -= this.valendo;
    if(this.ptime2 < 0){
      this.ptime2 = 0
    }
  }

  zerar(){
    this.time1 = 0;
    this.time2 = 0;
    this.ptime1 = 0;
    this.ptime2 = 0;
    this.valendo = 1;
  }
}
