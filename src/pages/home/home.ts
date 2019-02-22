import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private urlCreated: string = null;

  constructor(public navCtrl: NavController) {
    console.log('urlCreated',this.urlCreated)
  }


  getDataPdf(event) {
    this.urlCreated = URL.createObjectURL(event.target.files[0]);
  }

  afterLoad(event) {
    console.log('event', event)
  }

}
