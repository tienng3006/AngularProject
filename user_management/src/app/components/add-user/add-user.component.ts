import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent implements OnInit {
  @Output() onAddUser: EventEmitter<User> = new EventEmitter();

  username!: string;
  password!: string;
  email!: string;
  address!: string;
  customStylesValidated = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit() {
    this.customStylesValidated = true;
    if (!this.username || !this.password || !this.email) {
      return;
    }

    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email,
      address: this.address,
    };

    this.onAddUser.emit(newUser);

    this.username = '';
    this.password = '';
    this.email = '';
    this.address = '';

    this.customStylesValidated = false;
  }
}
