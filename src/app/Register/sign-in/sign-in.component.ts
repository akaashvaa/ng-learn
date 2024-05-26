import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validator,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
})
export class SignInComponent {
  routerLinkVariable = '/auth/login';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}
  loginForm = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  onSubmit() {
    if (this.loginForm.invalid) {
      console.warn('form is not as expected');
      return;
    }

    // console.log(
    //   this.loginForm.controls['email'].value,
    //   this.loginForm.controls['password'].value
    // );

    this.authService
      .userLogin(
        this.loginForm.controls['email'].value,
        this.loginForm.controls['password'].value
      )
      .subscribe((status) => {
        this.router.navigate(['']);
        console.log('staus observable', status);
      });

    this.loginForm.reset();
  }
}
