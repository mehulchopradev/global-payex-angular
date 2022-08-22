import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-generator',
  templateUrl: './name-generator.component.html',
  styleUrls: ['./name-generator.component.css']
})
export class NameGeneratorComponent implements OnInit {

  // state of the component
  firstName = '';
  lastName = '';

  constructor() { }

  ngOnInit(): void {
  }

  /* onFirstNameChanged(firstName: string) {
    this.firstName = firstName;
  }

  onLastNameChanged(lastName: string) {
    this.lastName = lastName;
  } */

}
