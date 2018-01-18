import { Component, OnInit,Input } from '@angular/core';
//import {  } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
@Input () studentRollNumber:number;
@Input('StudentName')  studentName:string;
@Input('StudentCity')  studentCity:string;
@Input('StudentState')  studentState:string;  
  constructor() { 
  }

  ngOnInit() {
  }

}
