import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-assignment3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignment3.component.html',
  styleUrl: './assignment3.component.scss'
})

export class Assignment3Component {
  toggleParagraph: boolean = true;
  id: number = 0;
  queue: { id: number; date: Date }[] = [];

  toggleDisplayDetails() {
    this.queue.push({ id: this.id++, date: new Date() });
    this.toggleParagraph = !this.toggleParagraph;
    console.log(this.id)
  }

}

