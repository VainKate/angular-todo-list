import { Component, Input, OnInit, HostListener } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  constructor(
    private todoListService: TodoListService,
    private formBuilder: FormBuilder
  ) {}

  faPencilAlt = faPencilAlt;
  faTrash = faTrash;
  faTimes = faTimes;
  faCheck = faCheck;

  @Input() task!: Task;
  isEditing: boolean = false;
  editTaskForm = this.formBuilder.group({
    label: ['', Validators.required],
  });

  private clickInside = false;

  ngOnInit(): void {
    this.editTaskForm.setValue({ label: this.task?.label });
  }

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

    if (this.editTaskForm.invalid) {
      return;
    }

    this.todoListService.editTodo(this.task.id, this.editTaskForm.value.label);

    this.editTaskForm.setValue({ label: this.task?.label });
    console.log(this.task);
    this.isEditing = false;
  }
}
