import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Input and Output Bindings';

  Getinfo(message:string){
console.log(`Getting More Info ${message}`);
  }
}
