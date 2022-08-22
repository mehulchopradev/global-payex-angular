import { Component, OnInit } from '@angular/core';
import { CalcInfo } from '../types/calc-info';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  firstNo = '';
  secondNo = '';
  operation = '+';
  ans = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCalculated(data: CalcInfo) {
    const { firstNo, secondNo, operation, ans } = data;
    this.firstNo = firstNo.toString();
    this.secondNo = secondNo.toString();
    this.operation = operation;
    this.ans = ans.toString();
  }
}
