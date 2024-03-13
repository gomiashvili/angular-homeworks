import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child1Component implements OnInit, OnChanges {
  @Input() major!: number;
  @Input() minor!: number;

  logData = [{
    log: 'Initial value of major set to 1, initial value of minor set to 23'
  }]
  ngOnChanges(changes: SimpleChanges): void {
    let majorChanged = changes['major'];
    let minorChanged = changes['minor'];
    if (minorChanged && !majorChanged) {
      this.logData.push({
        log: `minor changed from ${minorChanged.previousValue} to ${minorChanged.currentValue}`
      })
    }

    if (majorChanged) {
      if (majorChanged.previousValue) {
        this.logData.push({
          log: `major changed from ${majorChanged.previousValue} to ${majorChanged.currentValue}, minor changed from
          ${minorChanged != undefined && minorChanged.previousValue != undefined ? minorChanged.previousValue : 0} to 
          ${minorChanged != undefined && minorChanged.currentValue != undefined ? minorChanged.currentValue : 0}`
        })
      }
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
