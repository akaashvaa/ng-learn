import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss',
})
export class ShoppingComponent {
  user: string | undefined;
  email: string | undefined;
  onSubmit() {
    console.log(this.user, this.email);
  }
}
