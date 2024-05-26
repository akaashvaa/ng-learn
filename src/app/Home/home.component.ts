import { Component } from '@angular/core';

import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styles: '',
})
export class HomeComponent {
  userName: string = 'Akash';
}