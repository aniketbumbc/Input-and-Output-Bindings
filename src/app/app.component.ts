import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input and Output Bindings';

  Getinfo(message:string){
document.write(`Getting More Info ${message}`);
  }
// Input bind data from child-component
  private name:string;
  private city:string;
  private state:string;
  private rollnumber:number;
 getData():void{
    this.rollnumber=454345;
    this.name="Aniket";
    this.city="London";
    this.state="UK";
  }
}
