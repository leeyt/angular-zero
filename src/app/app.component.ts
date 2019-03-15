import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-zero';
  url = 'http://blog.miniasp.com/';
  imgurl = '/assets/images/logo.png';

  constructor() {
  }

  changeTitle() {
    this.title = 'The Will Will Web';
  }
}
