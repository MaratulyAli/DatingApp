import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../../_services/alertify.service';
import { UserService } from '../../_services/user.service';
import { User } from '../../_models/user';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  users: User[];

  constructor(
    private userService: UserService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    }, error => {
      this.alertify.error(error);
    });
  }

}
