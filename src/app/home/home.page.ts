import { Component, ViewChild } from "@angular/core";
import { NavController, AlertController } from "@ionic/angular";
import { LoginPage } from "../login/login.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  @ViewChild("username") uname;
  @ViewChild("password") password;

  constructor(
    public alertController: AlertController,
    public navCtrl: NavController
  ) {}

  signIn() {
    this.navCtrl.navigateForward("login");
  }
  register() {
    this.navCtrl.navigateForward("register");
  }
}
