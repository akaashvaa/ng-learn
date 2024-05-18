import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './BindMethod/parent/parent.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ParentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ng-learn';
  disable = true;
  twoway: String = 'hello';

  /**
   * @abstract local reference template
   */
  @ViewChild('inputVal', { static: true }) value: any;

  // console.log(value)

  // two way binding
  onAddOne(serverData: { name: string }) {
    console.log('add one', serverData.name);
  }
  onAddTwo() {
    console.log(this.value.nativeElement.value);
    console.log('add two');
  }
}
