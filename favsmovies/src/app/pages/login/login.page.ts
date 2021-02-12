import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  providers: [AuthService]
})
export class LoginPage implements OnInit {

  public user: any = null;
  constructor(private auth: AuthService, public toastController: ToastController) { }

  ngOnInit() {
    this.auth.currentUser.subscribe(user => {
      this.user = user;
      console.log(this.user);
      if (this.user) {
        this.presentToast('Logeado');
      } else {
        this.presentToast('No Logeado');

      }


    })
  }

  async loginGoogle() {
    await this.auth.loginGoogle();
    //console.log(user.user);
  }

  signOut() {
    this.auth.signOut();
  }

  async loginTwitter(){
    await this.auth.loginTwitter();
  }

  async presentToast(Message: string) {
    const toast = await this.toastController.create({
      message: Message,
      duration: 2000
    });
    toast.present();
  }

}
