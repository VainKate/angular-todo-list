import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  addTaskForm = this.formBuilder.group({
    label: ['', Validators.required],
    done: [false],
  });

  constructor(
    private todoListService: TodoListService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {}

  createATask(event: Event) {
    event.preventDefault();
    this.todoListService.addTodo(this.addTaskForm.value);
  }
}
