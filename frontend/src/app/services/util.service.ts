import {Injectable} from '@angular/core';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {
  ActionSheetController,
  AlertController,
  LoadingController,
  ModalController,
  NavController,
  ToastController
} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor(
      private loadingCtrl: LoadingController,
      private toastCtrl: ToastController,
      private alertCtrl: AlertController,
      private modalCtrl: ModalController,
      private actionSheetCtrl: ActionSheetController,
      private statusBar: StatusBar,
      private navCtrl: NavController,
  ) {
  }

  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  goToNew(route) {
    this.navCtrl.navigateRoot(route);
  }

  goBack(route) {
    this.navCtrl.navigateBack(route);
  }

  goForward(route) {
    this.navCtrl.navigateForward(route);
  }

  async createAlert(header, backdropDismiss, message, buttonOptions1, buttonOptions2?): Promise<HTMLIonAlertElement> {
    const alert = await this.alertCtrl.create({
      header,
      backdropDismiss,
      message,
      buttons: !buttonOptions2 ? [buttonOptions1] : [buttonOptions1, buttonOptions2]
    });
    return alert;
  }

  async presentAlert(data: { message: string; header: string; subHeader: string; }) {
    const alert = await this.alertCtrl.create({
      header: data.header,
      subHeader: data.subHeader,
      message: data.message,
      buttons: ['OK']
    });

    await alert.present();
  }

  async createLoader(message): Promise<HTMLIonLoadingElement> {
    const loader = await this.loadingCtrl.create({
      message
      // duration: 3000
    });
    return loader;
  }

  // tslint:disable-next-line:max-line-length
  async createToast(message, showCloseButton = false, position = 'bottom' as 'top' | 'bottom' | 'middle', duration = 2000): Promise<any> {
    const toast = await this.toastCtrl.create({
      message,
      position,
      duration,
      buttons: [{
        text: 'Done',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    return toast.present();
  }

  async createModal(component, componentProps?, cssClass?): Promise<HTMLIonModalElement> {
    const modal = await this.modalCtrl.create({
      component,
      cssClass,
      componentProps
    });
    return modal;
  }

  async createActionSheet(button1, button2?, button3?) {
    const sheet = await this.actionSheetCtrl.create({
      buttons: [button1, button2, button3]
    });

    return sheet;
  }


  changeStatusBarColor() {
    this.statusBar.backgroundColorByHexString('#000');
  }

}
