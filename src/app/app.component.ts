import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  onButtonClick(event) {
    console.log(`Click event is working, event:`, event);
  }

}
