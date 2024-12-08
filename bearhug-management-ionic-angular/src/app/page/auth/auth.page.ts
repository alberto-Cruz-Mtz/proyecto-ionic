import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  title = 'Registrate ahora'
  isVisible = false;
  inputType: string = 'password'
  inputIcon: string = 'eye-outline'
  authForm: FormGroup;
  modalMessage = '';
  error = false;
  currentRoute: string = '';
  typeAuth = 'sign-up';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit() {
    this.currentRoute = this.router.url.substring(5);
    console.log('Ruta actual:', this.currentRoute);
    if (this.currentRoute == '/log-in') {
      this.title = 'Bienvenido de regreso';
      this.typeAuth = 'log-in';
    }
  }

  showPassword(): void {
    if (this.isVisible) {
      this.inputType = 'password'
      this.inputIcon = 'eye-outline'
      this.isVisible = false;
      return;
    }
    this.inputType = 'text'
    this.inputIcon = 'eye-off-outline'
    this.isVisible = true;
  }

  handleSignUp(): void {
    if (this.authForm.valid) {
      const credentials = this.authForm.value;
      this.authService.register(credentials.email, credentials.password)
        .then(response => {
          this.modalMessage = response.message
          console.log(response)
          this.error = !response.status;
        })
        .catch(err => console.log(err));
    }
    console.log(this.authForm.value)
  }

  handleLogin(): void {
    if (this.authForm.valid) {
      const credentials = this.authForm.value;
      this.authService.login(credentials.email, credentials.password)
        .then(response => {
          this.modalMessage = response.message
          console.log(response)
          this.error = !response.status;
        })
        .catch(err => console.log(err));
    }
    console.log(this.authForm.value)
  }

  ionViewWillEnter() {
    this.authForm.reset();
    console.log('Datos limpios');
  }
}

interface IAuthFormResponse {
  status: boolean;
  message: string;
}

interface IAuthFormRequest {
  email: string;
  password: string;
}
