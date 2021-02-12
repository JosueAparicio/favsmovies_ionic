import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User | null>;

  constructor
  (private afAuth: AngularFireAuth,
    private platform: Platform,
    private googlePlus: GooglePlus) {
    this.user = this.afAuth.authState;

  }


  // Obtener el observador del usuario actual
  get currentUser(): Observable<firebase.User | null> {
    return this.user;
  }

  async loginGoogle() {
    console.log(Capacitor.getPlatform());
    
    if (Capacitor.getPlatform() =='android') {
      console.log('android');

      const res = await this.googlePlus.login({
        'webClientId': '234443214764-i1bj7o6prh81grkv7nc9l3t9d48d25rf.apps.googleusercontent.com',
        'offline': true
      });
      return await this.afAuth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
    } else if(Capacitor.getPlatform() == 'web') {
      console.log('web');
      
      return await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

    }
  }

  async loginTwitter(){
    return await this.afAuth.signInWithPopup(new firebase.auth.TwitterAuthProvider());

  }

  // Finalizar sesión
  signOut(): Promise<void> {
    return this.afAuth.signOut();
  }
}
