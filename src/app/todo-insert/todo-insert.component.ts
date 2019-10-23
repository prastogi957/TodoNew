import { Component, OnInit } from '@angular/core';
import {TodoService} from '../todo.service';

@Component({
  selector: 'app-todo-insert',
  templateUrl: './todo-insert.component.html',
  styleUrls: ['./todo-insert.component.css']
})
export class TodoInsertComponent implements OnInit {

  constructor(private rem:TodoService) { }
  task
  printer(){
    console.log("Akhil chutiya hai")
  }
  addTodo(){
    console.log(this.task);
    this.rem.todoList.push(this.task);
    console.log(this.rem.todoList);
  }
  ngOnInit() {
  }

}
