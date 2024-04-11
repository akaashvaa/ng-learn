import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './component/header/header.component'
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title :String = 'ng-learn';
  disable=true
   username : String = ""
  changeInput :String = ""
  onReset(){
   this.username = ""
  }

  handleInput(name : string){
    console.log(name)
  }
}
