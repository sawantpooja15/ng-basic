import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

 
  terms : boolean = false;
  constructor() { }

  ngOnInit(): void {
    
  }
  Register(contactForm:any){
    console.log(contactForm.value);
  }
} 
