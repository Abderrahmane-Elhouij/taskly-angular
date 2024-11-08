import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { newTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<boolean>();
  entredTitle = "";
  entredSummary = "";
  entredDate = "";
  private taskService = inject(TasksService)

  onCancelAddingTask() {
    this.close.emit(false);
  }

  onsubmit() {
    this.taskService.addTask({
      title: this.entredTitle,
      summary: this.entredSummary,
      date: this.entredDate
    }, this.userId);
    this.close.emit(false);
  }
}
