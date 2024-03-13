import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.scss']
})
export class Parent2Component implements OnInit {
  agreed: number = 0;
  disagreed: number = 0;
  clicked: boolean = true;

  addAgree(event: any) {
    return this.agreed += 1;
  }
  addDisagree(event: any) {
    return this.disagreed += 1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
