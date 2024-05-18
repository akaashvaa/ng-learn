import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  @Output() addOne = new EventEmitter<{ name: string }>();
  @Output() addTwo = new EventEmitter();

  onAddOne() {
    this.addOne.emit({ name: 'Akash' });
    // console.log('working');
  }
  onAddTwo() {
    this.addTwo.emit({});
  }
}
