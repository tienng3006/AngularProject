import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  customStylesValidated = false;

  id!: number;
  user!: User;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.userService
      .getUsers()
      .subscribe((users) => (this.user = users.find((u) => u.id === this.id)!));
  }

  onSave() {
    this.customStylesValidated = true;
    if (!this.user.username || !this.user.password || !this.user.email) {
      return;
    }

    this.userService
      .updateUser(this.user)
      .subscribe(() => this.router.navigate(['/']));

    this.customStylesValidated = false;
  }
}
