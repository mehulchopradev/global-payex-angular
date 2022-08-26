import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { CalcInfo } from '../types/calc-info';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit, OnChanges {

  firstNo = '';
  secondNo = '';
  operation = '+';
  ans = '';

  @Input()
  defaultCalcData: CalcInfo | null = null;

  @Output()
  calculated: EventEmitter<CalcInfo> = new EventEmitter();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes['defaultCalcData']);
    if (changes['defaultCalcData'] &&
      changes['defaultCalcData'].previousValue != changes['defaultCalcData'].currentValue) {
        const defaultCalcData = changes['defaultCalcData'].currentValue as CalcInfo;
        this.firstNo = defaultCalcData.firstNo.toString();
        this.secondNo = defaultCalcData.secondNo.toString();
        this.operation = defaultCalcData.operation;
        this.ans = defaultCalcData.ans.toString();

        this.calculated.emit(defaultCalcData);
      }
  }

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
