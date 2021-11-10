import { Component, Input, OnInit } from '@angular/core';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

import { Task } from '../../data/tasks.data';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  constructor() {}

  ngOnInit(): void {}
}
