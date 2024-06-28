import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../user.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input() user!: User | null;
}
