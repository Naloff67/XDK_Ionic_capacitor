import { Component } from '@angular/core';
import { Platform, AlertController, IonicModule,NavController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonLabel,
  IonItem,
  IonList,
  IonCard,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton,IonLabel,IonItem,IonList,IonCard,IonicModule,],
})
export class HomePage {
  molpayVisible: boolean = false;
  constructor(public platform: Platform, public alertCtrl: AlertController, private navCtrl: NavController) {}
  
  openNewPage() {
    this.navCtrl.navigateForward('/new-page');
   }
  
}
