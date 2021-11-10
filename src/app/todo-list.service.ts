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
    this.sortTodoList(this.todoList.value);
    return this.todoList;
  }

  getOpenTodosCount() {
    return this.openTodosCount;
  }

  sortTodoList(todoList: Task[]) {
    todoList.sort((a, b) => {
      // sort done's false booleans before true and then, by id from smaller to taller
      return a.done ? 1 : -1 || a.id - b.id;
    });
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

    this.sortTodoList(newTodosStatus);
    this.todoList.next(newTodosStatus);
  }

  addTodo(todoToCreate: { label: string; done: boolean }) {
    const todoIds = this.todoList.value.map((todo) => todo.id);
    const newTodo: Task = { ...todoToCreate, id: Math.max(...todoIds) + 1 };
    const newTodoList = [...this.todoList.value];
    newTodoList.push(newTodo);

    this.sortTodoList(newTodoList);
    this.todoList.next(newTodoList);
    this.openTodosCount.next(this.openTodosCount.value + 1);
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
