import { Component, OnInit, ViewChild } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  @ViewChild("username") username;
  @ViewChild("password") password;
  @ViewChild("rpassword") rpassword;

  constructor(
    private fire: AngularFireAuth,
    public alertController: AlertController,
    public router: Router
  ) {}

  ngOnInit() {}

  async alert(title: string, content: string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: content,
      buttons: ["OK"]
    });
    await alert.present();
  }

  registerUser() {
    const { username, password, rpassword } = this;
    if (password.value !== rpassword.value) {
      return this.alert("Danger", "Password don't match!");
    }
    this.fire.auth
      .createUserWithEmailAndPassword(this.username.value, this.password.value)
      .then(data => {
        this.alert("Success", "You are registered!");
        this.router.navigate(["/tabs"]);
      })
      .catch(error => {
        this.alert("Error", error.message);
      });
  }
}
