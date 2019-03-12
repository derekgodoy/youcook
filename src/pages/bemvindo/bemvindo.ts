import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the BemvindoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bemvindo',
  templateUrl: 'bemvindo.html',
})
export class BemvindoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseauth : AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BemvindoPage');
    this.firebaseauth.auth.currentUser.uid
  }

  planos(){
    this.navCtrl.setRoot("PlanosPage");
  }

}
