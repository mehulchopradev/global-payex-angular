import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalcInfo } from '../types/calc-info';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {

  firstNo = '';
  secondNo = '';
  operation = '+';
  ans = '';

  @Output()
  calculated: EventEmitter<CalcInfo> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onCalculate(): void {
    const { firstNo, secondNo, operation } = this;

    const iFirstNo = parseFloat(firstNo);
    const iSecondNo = parseFloat(secondNo);

    let ans: number;

    switch(operation) {
      case '+': ans = iFirstNo + iSecondNo;
        break;
      case '-': ans = iFirstNo - iSecondNo;
        break;
      default: ans = iFirstNo * iSecondNo;
    }

    this.ans = ans.toString();

    // send out data (firstNo, secondNo, operation ,ans) to my parent
    this.calculated.emit({
      firstNo: iFirstNo,
      secondNo: iSecondNo,
      operation,
      ans
    });
  }

}
