import {Component} from 'angular2/core';

@Component({
  selector: 'todo',
  template: `
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
  </div>
  `,
  styleUrls: ['./app/todo/todo.scss'],
})
export class TodoComponent {
    public message = 'Sample TODO Message Here';
    constructor(){

    }

}
