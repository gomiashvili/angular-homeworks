import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlight-directive',
  templateUrl: './highlight-directive.component.html',
  styleUrls: ['./highlight-directive.component.scss']
})
export class HighlightDirectiveComponent implements OnInit {

  color: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
