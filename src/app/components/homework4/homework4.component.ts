import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework4',
  templateUrl: './homework4.component.html',
  styleUrls: ['./homework4.component.scss']
})
export class Homework4Component implements OnInit {
  visibleSignup: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  showSignup(e: any) {
    this.visibleSignup = e;
  }
}
