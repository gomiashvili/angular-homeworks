import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  @Output() shownSignup = new EventEmitter<boolean>();

  constructor() { }
  ngOnInit(): void {
  }
  goToSignup() {
    this.shownSignup.emit(true);
  }
}
