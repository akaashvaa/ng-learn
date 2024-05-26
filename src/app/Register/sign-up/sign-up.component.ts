import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validator,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss',
})
export class SignUpComponent {
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  registerForm = this.fb.group(
    {
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
    },
    { validators: this.mustMatch() }
  );
  mustMatch() {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls['password'];
      const matchingControl = formGroup.controls['confirmPassword'];

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
  onSubmit() {
    if (this.registerForm.invalid) {
      console.warn('Form has validation errors. Please check.');
      return;
    }
    // console.log(this.registerForm.value);
    this.authService.post(this.registerForm.value).subscribe((status) => {
      if (status) {
        this.registerForm.reset();
        this.router.navigate(['']);
      }
      console.log('registered', status);
    });
  }
}
