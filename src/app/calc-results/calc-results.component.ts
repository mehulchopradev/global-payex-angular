import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-results',
  templateUrl: './calc-results.component.html',
  styleUrls: ['./calc-results.component.css']
})
export class CalcResultsComponent implements OnInit {

  @Input()
  firstNo = '';

  @Input()
  secondNo = '';

  @Input()
  operation = '';

  @Input()
  ans = '';
  

  constructor() { }

  ngOnInit(): void {
  }

}
