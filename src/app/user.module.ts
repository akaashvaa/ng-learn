import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

export interface UserData {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule],
  exports: [FormsModule, CommonModule],
  providers: [],
})
export class UserModule {}
