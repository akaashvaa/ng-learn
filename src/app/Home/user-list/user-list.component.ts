import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User, UserData } from '../../user.module';
@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  @Output() clickedItem: EventEmitter<User | null> = new EventEmitter();
  @Input() value: UserData | undefined;
  constructor() {}
  handleClick(item: User) {
    console.log(item);
    this.clickedItem.emit(item);
  }
}
