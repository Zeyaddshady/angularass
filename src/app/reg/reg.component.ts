import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
})
export class RegComponent {
  username = '';
  password = '';
  errorMessage = '';

  @Output() userCreated = new EventEmitter<{ username: string; password: string }>();

  registerUser() {
    if (!this.username) return;
    this.userCreated.emit({ username: this.username, password: this.password });
    this.username = '';
    this.password = '';
  }
}
