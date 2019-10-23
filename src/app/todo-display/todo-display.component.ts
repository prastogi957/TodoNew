import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';
@Component({
  selector: 'app-todo-display',
  templateUrl: './todo-display.component.html',
  styleUrls: ['./todo-display.component.css']
})
export class TodoDisplayComponent implements OnInit {

  constructor(private rem: TodoService) { }
  lister;
  lister2;
  uler=["H","E","L","L","O"];

  ngOnInit() {
    this.lister = this.rem.todoList;
    this.lister2 =this.rem.done;
  }
  doneList(i){
    // this.rem.done.push();
    console.log(this.uler[2]);
    this.rem.done.push(this.lister[i]);
    this.lister.splice(i,1);
  }
  delete(i){
    this.lister.splice(i, 1);
  }
  delete2(j){
    this.lister2.splice(j, 1);
  }

}
