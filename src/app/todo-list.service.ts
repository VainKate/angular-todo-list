import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { tasks, Task } from 'src/data/tasks.data';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  todoList = new BehaviorSubject<Task[]>(tasks);
  openTodosCount = new BehaviorSubject<number>(
    this.todoList.value.filter((todo) => !todo.done).length
  );

  constructor() {}

  getTodos() {
    return this.todoList;
  }

  getOpenTodosCount() {
    return this.openTodosCount;
  }

  toggleTodoCheck(taskId: number) {
    const newTodosStatus = [...this.todoList.value];

    newTodosStatus.map((todo) => {
      if (todo.id === taskId) {
        todo.done = !todo.done;
        this.openTodosCount.next(
          todo.done
            ? this.openTodosCount.value - 1
            : this.openTodosCount.value + 1
        );
      }
    });

    this.todoList.next(newTodosStatus);
  }

  editTodo(taskId: number, newLabel: string) {
    const todoListUpdated = [...this.todoList.value];

    todoListUpdated.map((todo) => {
      if (todo.id === taskId) {
        todo.label = newLabel;
      }
    });

    this.todoList.next(todoListUpdated);
  }

  deleteTodo(task: Task) {
    const newTodoList = this.todoList.value.filter(
      (todo) => todo.id !== task.id
    );

    if (!task.done) {
      this.openTodosCount.next(this.openTodosCount.value - 1);
    }
    this.todoList.next(newTodoList);
  }
}
