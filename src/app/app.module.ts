import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FormComponent } from './form/form.component';
import { TasksListComponent } from './tasks-list/tasks-list.component';
import { TaskItemComponent } from './task-item/task-item.component';
import { TasksCounterComponent } from './tasks-counter/tasks-counter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FormComponent,
    TasksListComponent,
    TaskItemComponent,
    TasksCounterComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{ path: '', component: TodoListComponent }]),
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
