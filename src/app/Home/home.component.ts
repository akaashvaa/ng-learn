import { Component, OnInit } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { UserService } from '../Services/user.service';
import { User } from '../user.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UserListComponent } from './user-list/user-list.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, UserListComponent],
  templateUrl: './home.component.html',
  styles: '',
})
export class HomeComponent implements OnInit {
  userName: string = 'Akash';
  clickedItem: User | null = null;
  value: User[] | undefined;
  showClickedItem: User | null;

  constructor(private userService: UserService) {
    this.showClickedItem = this.clickedItem;
  }
  ngOnInit(): void {
    this.userService.getAllTheUser().subscribe((res: User[]) => {
      this.value = res;
      console.log('value', this.value);
    });
  }
  handleClickedItem(item: User | null) {
    this.showClickedItem = item;
    console.log('output and input ', this.showClickedItem);
  }

  closeAll() {
    this.clickedItem = null;
  }
}
