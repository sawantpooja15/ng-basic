import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-fomrs',
  templateUrl: './reactive-fomrs.component.html',
  styleUrls: ['./reactive-fomrs.component.scss']
})
export class ReactiveFomrsComponent implements OnInit {
  personForm!: FormGroup;

  langs: string[] = [
    'Please select values',
    'English',
    'French',
    'German',
  ];

  name: string = 'Reactive Form';

  constructor() { }

  ngOnInit(): void {
    this.personForm = new FormGroup(
      {
        firstName: new FormControl('angularforms'),
        lastName: new FormControl('bar'),
        email: new FormControl('foo.bar@gmail.com'),
        password: new FormControl('angular')
      }
    );

  }

  ngOnChanges() {
    
  }

  submitForm(){
    console.log(this.personForm);
  }

}
