import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Dynamic-title';
  // number = 42;
  // arr = [1, 2, 3, 4];
  // obj = { a: 1, b: { c: 3 } };
  // img = 'https://ionicframework.com/docs/icons/logo-react-icon.png';
  // initValue = ''

  // constructor() {
  // setTimeout(() => {
  //   console.log('img change now!!!')
  //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/240px-Angular_full_color_logo.svg.png'
  // }, 5000);
  // }

  // onInput(event: Event) {
  //   console.log('event ==>', event)
  //   this.initValue = (<HTMLInputElement>event.target).value;
  // }
  // onInput(event: any) {
  //   console.log('==>', event);
  //   this.title = event.target.value
  // }

  // toggle: any = false;

  // onClick() {
  //   console.log('click!!!')
  // }
  //
  // onBlur(str: string) {
  //   this.initValue = str
  // }
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  obj = [
    {
      title: 'post1', author: 'Pointarts', comments: [
        { name: 'MAX1', text: 'lorem1' },
        { name: 'MAX1', text: 'lorem2' },
        { name: 'MAX1', text: 'lorem3' },
        { name: 'MAX1', text: 'lorem4' },
      ]
    },
    {
      title: 'post1', author: 'Pointarts2', comments: [
        { name: 'MAX2', text: 'lorem1' },
        { name: 'MAX2', text: 'lorem2' },
        { name: 'MAX2', text: 'lorem3' },
        { name: 'MAX2', text: 'lorem4' },
      ]
    }
  ]
  nowTime: Date = new Date()
}


