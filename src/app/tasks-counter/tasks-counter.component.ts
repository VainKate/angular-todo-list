import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-tasks-counter',
  templateUrl: './tasks-counter.component.html',
  styleUrls: ['./tasks-counter.component.scss'],
})
export class TasksCounterComponent implements OnInit {
  taskCount: number = 0;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {
    this.todoListService
      .getOpenTodosCount()
      .subscribe((count: number) => (this.taskCount = count));
  }
}
