import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.scss']
})
export class Parent1Component implements OnInit {
  major: number = 1;
  minor: number = 23;


  minorUpdate() {
    this.minor += 1;
  }
  majorUpdate() {
    this.major += 1;
    this.minor = 0;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
