import { Component, OnInit } from '@angular/core';
import { tasks } from 'src/data/tasks.data';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss'],
})
export class TasksListComponent implements OnInit {
  tasks = tasks.sort((value) => {
    // sort done's false booleans before true and then, by id from smaller to taller
    return value.done ? 1 : -1 || value.id ? -1 : 1;
  });

  constructor() {}

  ngOnInit(): void {}
}
