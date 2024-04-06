import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './component/header/header.component'
import { WarningComponent } from './warning/warning.component'
import {SuccessComponent } from './success/success.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SuccessComponent,  HeaderComponent, WarningComponent, ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'ng-learn';
  disable=true

  handleInput(name : string){
    console.log(name)
  }
}
