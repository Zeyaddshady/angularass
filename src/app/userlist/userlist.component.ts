import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'] // <- CSS linked correctly
})
export class UserListComponent {
  @Input() users: { username: string; password: string }[] = [];
  @Output() delete = new EventEmitter<string>();

  removeUser(username: string) {
    this.delete.emit(username);
  }
}
