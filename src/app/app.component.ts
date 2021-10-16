import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Notes', url: '/folder/Inbox', icon: 'bookmarks' },
    { title: 'Settings', url: 'settings', icon: 'settings' },
    { title: 'About', url: '/folder/Favorites', icon: 'information-circle' },
    { title: 'Exit', url: '/folder/Archived', icon: 'exit' },
  ];
  
  constructor( private storage: Storage,
              private themeService: ThemeService,
    ) {
     this.initializeApp();
    }

    initializeApp() {
  
      this.storage.get('dark-theme').then((val) => {
        console.log('Theme From Storage', val);
        if(val) {
          this.themeService.enableDark();
        }
      });
  
    }
}
