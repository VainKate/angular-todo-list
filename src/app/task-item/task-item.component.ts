import { Component, Input, OnInit, HostListener } from '@angular/core';
import {
  faCheck,
  faPencilAlt,
  faTimes,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../data/tasks.data';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  constructor(private todoListService: TodoListService) {}

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faTimes = faTimes;
  faCheck = faCheck;

  @Input() task!: Task;
  isEditing: boolean = false;

  private clickInside = false;

  ngOnInit(): void {}

  @HostListener('click')
  clickIn() {
    this.clickInside = true;
  }

  @HostListener('document:click')
  clickout() {
    if (!this.clickInside && this.isEditing) {
      this.isEditing = false;
    }
    this.clickInside = false;
  }

  toggleStatus() {
    this.isEditing = false;
    this.todoListService.toggleTodoCheck(this.task.id);
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onDelete() {
    this.todoListService.deleteTodo(this.task);
  }

  handleSubmit(event: Event) {
    event.preventDefault();
  }
}
