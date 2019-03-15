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

  wordCount = 0;

  constructor() {
  }

  changeTitle(altKey: boolean) {
    if (altKey) {
      this.title = 'The Will Will Web';
    }
  }

  keywordChanges(keyword: string) {
    this.wordCount = keyword.length;
  }

  keywordReset(input: HTMLInputElement) {
    this.wordCount = 0;
    input.value = '';
  }
}
