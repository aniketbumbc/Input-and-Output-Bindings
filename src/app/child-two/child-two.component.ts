import { Component, OnInit,EventEmitter,Output } from '@angular/core';


@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  @Output() Moreinfo: EventEmitter<string>; // declare output bindings 
  constructor() {
    this.Moreinfo=new EventEmitter();
   }

passString():void{
   this.Moreinfo.emit("Hello Form Child 2 component implemention of output bindings using event emitter");
 }  
  ngOnInit() {
  }

}
