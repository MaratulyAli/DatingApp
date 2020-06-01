import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isRegisterMode = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  toggleRegisterMode(): void {
    this.isRegisterMode = true;
  }

  cancelRegisterMode(isRegisterMode: boolean): void {
    this.isRegisterMode = isRegisterMode;
  }
}
