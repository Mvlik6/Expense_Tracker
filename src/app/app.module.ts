import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrackerComponent } from './tracker/tracker.component';
import { LoginComponent } from './login/login.component';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule} from '@angular/fire/compat/firestore'
import { AngularFireAuthModule} from '@angular/fire/compat/auth';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule} from '@angular/material/input';
import { MatButtonModule} from '@angular/material/button';
import { SignupComponent } from './signup/signup.component';
import { EchartsxModule } from 'echarts-for-angular';

@NgModule({
  declarations: [
    AppComponent,
    TrackerComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCkaCp_YNFJLSBpaHCrYn8Lk-TZ-zAkzjs",
      authDomain: "expense-tracker-angular-4a621.firebaseapp.com",
      databaseURL: "https://expense-tracker-angular-4a621-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "expense-tracker-angular-4a621",
      storageBucket: "expense-tracker-angular-4a621.appspot.com",
      messagingSenderId: "692253163753",
      appId: "1:692253163753:web:dca269c18bdf340b127078",
      measurementId: "G-FV4RJJ966Y"
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    EchartsxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
