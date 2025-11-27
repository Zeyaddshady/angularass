import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // <- CSS linked correctly
})
export class AppComponent {
  title = 'notes'; // optional, for your tests/specs
  users: { username: string; password: string }[] = [];

  addUser(user: { username: string; password: string }) {
    const exists = this.users.some(u => u.username === user.username);
    if (!exists) {
      this.users.push(user);
    } else {
      alert('Username already exists');
    }
  }

  deleteUser(username: string) {
    this.users = this.users.filter(u => u.username !== username);
  }
}
