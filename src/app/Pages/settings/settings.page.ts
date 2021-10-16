import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  
  darkMode: any;
  showtheme: any;

  constructor( public themeService: ThemeService) { 
    this.darkMode = this.themeService.darkMode;
  }

  ngOnInit() {
  }
  toggletheme(){
    this.showtheme = !this.showtheme;
  }
}
