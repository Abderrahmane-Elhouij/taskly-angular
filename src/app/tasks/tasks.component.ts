import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { newTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, NewTaskComponent]
})
export class TasksComponent {

  @Input({ required: true }) userId!: string
  @Input({ required: true }) name!: string
  isAddignTask = false;

  constructor(private taskService: TasksService) { }

  get selectedUserTasks() {
    return this.taskService.getUserTaksks(this.userId);
  }

  onStartAddTask() {
    this.isAddignTask = true;
  }

  onCloseTask(isCanceld: boolean) {
    this.isAddignTask = isCanceld;
  }

  // onAddTask(newTask: newTaskData) {

  //   this.isAddignTask = false;
  // }
}
