import {Component} from 'angular2/core';
import {TodoComponent} from './todo/todo.component.ts';

import styles from './app.css!text';

@Component({
  selector: 'app',
  template: `
  <h1>{{ title }}</h1>
  <h2>What color am i?</h2>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </div>
  <todo></todo>
  `,
  directives:[TodoComponent],
  styles:[styles]
})

export class AppComponent {
    public title = 'SystemJS + JSPM to manage things';
    constructor(){
      console.log("Herro");
    }

}
