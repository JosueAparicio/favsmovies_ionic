import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [AuthService]
})
export class HomePage {
  slideOpts = {
    initialSlide: 0,
    speed: 400
  };

  public user: any = null;
  constructor(private _router: Router, private auth: AuthService, public loadingController: LoadingController) {}

  ngOnInit() {
    this.presentLoading();
    this.auth.currentUser.subscribe(user => {
      this.user = user;
      if (this.user) {
        //this._router.navigate(['allmovies']);
      } 

    })
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class-await',
      message: 'Please wait...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

}
