import { Component, OnInit } from '@angular/core';

import { Task } from 'src/data/tasks.data';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoListService.getTodos().subscribe((todos) => (this.tasks = todos));
  }
}
