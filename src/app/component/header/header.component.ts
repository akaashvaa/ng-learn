import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
    <h1 classname="text-[3rem] bg-green ">
      It a Standalone component. header works!
    </h1>
  `,
  styles: `
   h1 {
  color : blue ;
}
`
})
export class HeaderComponent {

}
