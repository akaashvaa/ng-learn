import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LetSee } from '../Home/user-list/user-list.component';

@Component({
  selector: 'app-shopping',
  standalone: true,
  imports: [FormsModule, LetSee],
  templateUrl: './shopping.component.html',
  styleUrl: './shopping.component.scss',
})
export class ShoppingComponent {
  user!: string;
  email!: string;
  onSubmit() {
    console.log(this);
  }
}
