import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ThemeService } from './services/theme.service';
import {Platform, NavController,} from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  private rootPage:any;
  public appPages = [
    { title: 'Notes', url: 'notes', icon: 'bookmarks' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: 'about', icon: 'information-circle' },
    { title: 'Exit',  icon: 'exit'},
  ];
  
  constructor( private storage: Storage,
               private themeService: ThemeService,
               private platform: Platform,
               private navigator:NavController
    ) {
     this.initializeApp();
     this.platform = platform;
    }

    initializeApp() {
  
      this.storage.get('dark-theme').then((val) => {
        console.log('Theme From Storage', val);
        if(val) {
          this.themeService.enableDark();
        }
      });
  
    }
    exitApp(){
      navigator['app'].exitApp();
   }
}
