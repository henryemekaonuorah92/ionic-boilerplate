import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { HomePage } from '../pages/home/home.page';
import { ContactPage } from '../pages/contact/contact.page';
import { AboutPage } from '../pages/about/about.page';
import { SimpleFormPage } from '../pages/simple-form/simple-form.page';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) public nav: Nav;

  public rootPage: any = HomePage;

  public pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'About', component: AboutPage },
      { title: 'Form', component: SimpleFormPage },
      { title: 'Contact', component: ContactPage }
    ];

  }

 public initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

 public openPage(page: any) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

// import { TabsPage } from '../pages/tabs/tabs.page';

// @Component({
//     template: 'app.html'
// })
// export class MyApp {
//     public rootPage = TabsPage;

//     constructor(public platform: Platform,
//                 public splashScreen: SplashScreen) {
//         this.platformReady();
//     }

//     public platformReady() {
//         // Call any initial plugins when ready
//         this.platform.ready().then(() => {
//             this.splashScreen.hide();
//         });
//     }
// }
