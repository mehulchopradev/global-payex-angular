import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';
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
  defaultCalcData: CalcInfo | null = null;

  constructor(private calcService: CalculatorService) { }

  async ngOnInit() {
    // lifecycle method
    // called only once at the start when the component is being mounted on the DOM

    try {
      const calcInfo: CalcInfo = await this.calcService.fetchDefaultCalcData();
      this.defaultCalcData = calcInfo;
    } catch (err) {
      console.log(err);
    }

    // The mounting of the component and its children does not wait for the above
    // async IO call to get over
  }

  onCalculated(data: CalcInfo) {
    const { firstNo, secondNo, operation, ans } = data;
    this.firstNo = firstNo.toString();
    this.secondNo = secondNo.toString();
    this.operation = operation;
    this.ans = ans.toString();
  }
}
