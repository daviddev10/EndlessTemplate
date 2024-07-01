import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { FormBuilder, Validators, FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

type UserFields = "email" | "password";
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: "app-login",
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  public newUser = false;
  // public user: firebase.User;
  public loginForm: FormGroup;

  public errorMessage: any;

  constructor(private fb: FormBuilder, public router: Router) {
    this.loginForm = this.fb.group({
      email: ["Test@gmail.com", [Validators.required, Validators.email]],
      password: ["test123", Validators.required],
    });
  }

  ngOnInit() {}

  login() {
    if (this.loginForm.value['email'] == "Test@gmail.com" && this.loginForm.value['password'] == "test123") {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/dashboard/default"]);
    }
  }

  loginFacebook(){

  }
  loginTwitter(){

  }
  loginGoogle(){

  }
}
