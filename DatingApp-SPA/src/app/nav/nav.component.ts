import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public auth: AuthService,
    private alertify: AlertifyService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe({
      next: () => {
        this.alertify.success('Logged in successfully');
        this.router.navigate(['/members']);
      },
      error: error => {
        this.alertify.error(error);
      }
    });
  }

  loggedIn() {
    return this.auth.loggedIn();
  }

  logout() {
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
    localStorage.removeItem('token');
  }

}
