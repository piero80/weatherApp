import { Component, OnInit, ViewChild } from "@angular/core";
import { AlertController, NavController } from "@ionic/angular";
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  @ViewChild("username") user;
  @ViewChild("password") password;

  constructor(
    private fire: AngularFireAuth,
    public alertController: AlertController,
    public navCtrl: NavController,
    public router: Router
  ) {}

  ngOnInit() {}

  async alert(message: string) {
    const alert = await this.alertController.create({
      header: "Info",
      subHeader: message,
      buttons: ["OK"]
    });
    await alert.present();
  }

  signInUser() {
    this.fire.auth
      .signInWithEmailAndPassword(this.user.value, this.password.value)
      .then(data => {
        this.alert("Success!You're logged in");
        this.router.navigate(["/tabs"]);
        //this.navCtrl.navigateRoot("tabs/tab1");
      })
      .catch(error => {
        this.alert(error.message);
      });
  }
}
