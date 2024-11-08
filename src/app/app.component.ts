import { Component } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/haeder.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'first-angular-app';
  users = DUMMY_USERS
  SelectedUserId?: string
  addedTask?: string;

  get selectedUser() {
    return this.users.find(user => user.id === this.SelectedUserId);
  }

  onSelectUser(id: string) {
    this.SelectedUserId = id;
  }
}
