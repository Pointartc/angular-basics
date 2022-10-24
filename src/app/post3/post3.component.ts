import { Component } from '@angular/core';

@Component({
  selector: 'app-post3',
  template: `
    <div class="Post3">
      <h2>Post title</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim provident, sed. Culpa esse laborum natus nobis
        odit pariatur unde. Esse!</p>
    </div>`,
  styles: [`
    .Post3 {
      padding: .5rem;
      border: 2px solid black;
      width: 500px;
    }

    h2 {
      font-size: 1rem;
    }
  `]
})
export class Post3Component {

}
