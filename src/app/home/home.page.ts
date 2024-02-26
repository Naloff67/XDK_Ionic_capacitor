import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
} from '@ionic/angular/standalone';

declare var molpay: {
  startMolpay: (
    arg0: {
      // Mandatory String. Values obtained from MOLPay.
      mp_username: string;
      mp_password: string;
      mp_merchant_ID: string;
      mp_app_name: string;
      mp_verification_key: string;
      // Mandatory String. Payment values.
      mp_amount: string; // Minimum 1.01
      mp_order_ID: string;
      mp_currency: string;
      mp_country: string;
      // Optional String.
      mp_channel: string;
      mp_bill_description: string;
      mp_bill_name: string;
      mp_bill_email: string;
      mp_bill_mobile: string;
    },
    arg1: (response: string) => void
  ) => void;
  closeMolpay: () => void;
};

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class HomePage {
  constructor(public platform: Platform, public alertCtrl: AlertController) {}

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');

    this.platform.ready().then((readySource) => {
      console.log('The platform is ready');
      if (readySource === 'cordova') {
        console.log('Android detected');
        // MOLPay payment details
        var paymentDetails = {
          // Mandatory String. Values obtained from MOLPay.
          mp_username: 'RMSxdk_2022',
          mp_password: 'RMSpwd@2022',
          mp_merchant_ID: 'rmsxdk_mobile_Dev',
          mp_app_name: 'mobile',
          mp_verification_key: 'ee738b541eff7b6b495e44771f71c0ec',

          // Mandatory String. Payment values.
          mp_amount: '1.10', // Minimum 1.01
          mp_order_ID: '1523765091',
          mp_currency: 'MYR',
          mp_country: 'MY',

          // Optional String.
          mp_channel: 'multi',
          mp_bill_description: 'description',
          mp_bill_name: 'name',
          mp_bill_email: 'email',
          mp_bill_mobile: 'mobile',

          // Enabled Sandbox Credentials
          // 'mp_dev_mode': true,
        };

        var molpayCallback = (response: string) => {
          this.presentAlert(response);
        };
        molpay.startMolpay(paymentDetails, molpayCallback);
      }
    });
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  closeMolpay() {
    molpay.closeMolpay();
  }

  async presentAlert(result: string) {
    const alert = await this.alertCtrl.create({
      header: 'Result',
      message: result,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
