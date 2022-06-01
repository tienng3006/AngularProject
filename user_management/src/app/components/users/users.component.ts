import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { freeSet } from '@coreui/icons/js/free';
import { Router } from '@angular/router';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  search!: string;
  icons = freeSet;
  users: User[] = [];
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));

    // this.userService
    //   .getUsers()
    //   .pipe(
    //     map((users: User[]) =>
    //       users.map((u) => {
    //         u.username = 'Tien';
    //         return u;
    //       })
    //     )
    //   )
    //   .subscribe((users) => (this.users = users));
  }
  addUser(user: User) {
    this.userService.addUser(user).subscribe((user) => this.users.push(user));
  }
  deleteUser(user: User) {
    this.userService
      .deleteUser(user)
      .subscribe(
        () => (this.users = this.users.filter((u) => u.id !== user.id))
      );
  }

  change(user: User) {
    this.router.navigate([`detail/${user.id}`]);
  }
}
