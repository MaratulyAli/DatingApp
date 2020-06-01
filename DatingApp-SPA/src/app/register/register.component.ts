import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegisterEvent = new EventEmitter<boolean>();
  model: any = {};

  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.auth.register(this.model).subscribe(() => {
      console.log('Successfully registered');
    }, error => {
      console.log(error);
    });
  }

  cancel() {
    this.cancelRegisterEvent.emit(false);
    console.log('cancelled');
  }
}
