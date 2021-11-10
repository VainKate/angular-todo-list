import { Component, Input, OnInit, Output } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../data/tasks.data';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  constructor(private todoListService: TodoListService) {}

  ngOnInit(): void {}

  toggleStatus() {
    this.todoListService.toggleTodoCheck(this.task.id);
  }

  onDelete() {
    this.todoListService.deleteTodo(this.task);
  }
}
