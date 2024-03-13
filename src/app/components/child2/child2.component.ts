import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.scss']
})
export class Child2Component implements OnInit {
  @Input() name: string = "";
  @Input() clicked: boolean = false;
  @Output() addedAgree = new EventEmitter<number>();
  @Output() addedDisagree = new EventEmitter<number>();


  addAgree() {
    this.addedAgree.emit();
    this.clicked = true;
  }
  addDisagree() {
    this.addedDisagree.emit();
    this.clicked = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
