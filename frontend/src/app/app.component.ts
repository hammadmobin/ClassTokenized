import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {UiService} from "./services/ui.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: 'home',
      icon: 'list'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'list'
    },
    
  ];

  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private uiService: UiService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.initializeUiService();
    });
  }

  initializeUiService() {
    this.uiService.setWidth(this.platform.width());
    this.uiService.setHeight(this.platform.height());
    this.uiService.setScreenType(this.platform.width());
    this.platform.resize.subscribe(async () => {
      this.setScreenDimensions();
    }, this.uiService.screenResizeSubscriber.error);
  }

  setScreenDimensions() {
    const dimensions = {
      width: this.platform.width(),
      height: this.platform.height(),
    };
    this.uiService.screenResizeSubscriber.next(dimensions);
  }
}
