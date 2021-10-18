import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SettingsPage } from './Pages/settings/settings.page';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent ],
  entryComponents: [ ],
  imports: [
    BrowserModule,
    AngularFirestoreModule,
    Ng2SearchPipeModule,
    FormsModule,
    ReactiveFormsModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
     AppRoutingModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
