import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unless-anim',
  templateUrl: './unless-anim.component.html',
  styleUrls: ['./unless-anim.component.scss']
})
export class UnlessAnimComponent implements OnInit {
  condition: boolean = false;
  constructor() { }
  toggle() {
    this.condition = !this.condition;
  }
  ngOnInit(): void {
  }

}
