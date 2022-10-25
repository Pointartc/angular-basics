import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic-Title';
  num = 42;
  arr = [1, 2, 3, 4, 5];
  obj = { a: 1, b: { c: 2 } };
  img = 'https://ionicframework.com/docs/icons/logo-react-icon.png';

  constructor() {
    setTimeout(() => {
      console.log('function end now!!!')
      this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
    }, 5000)
  }

  inputValue = '';

  onInput(event: Event) {
    console.log('event ==>', event)
    this.inputValue = (<HTMLInputElement>event.target).value

  }

  onClick() {
    console.log('click ==>')
  }

  onBlur(str: string) {
    this.inputValue = str
  }
}
