import { Injectable } from '@angular/core';
import axios from 'axios';
import { CalcInfo } from './types/calc-info';

const url = 'https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  async fetchDefaultCalcData() {
    const response = await axios.get<CalcInfo>(url);
    const calcInfo: CalcInfo = response.data;
    return calcInfo;
  }
}
