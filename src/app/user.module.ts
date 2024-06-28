import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';

export interface User {
  id?: 'string';
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export type UserData = User[];
@NgModule({
  declarations: [],
  imports: [FormsModule, CommonModule],
  exports: [FormsModule, CommonModule],
  providers: [],
})
export class UserModule {}
