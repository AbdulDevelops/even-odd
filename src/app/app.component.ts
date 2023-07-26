import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'even-odd';

  oddCounterValue: number = 1;
  evenCounterValue: number = 0; // Initialize to 1 since the first emitted number will be 1

  GameStarting(number: any) {
    if (number % 2 === 0) {
      this.evenCounterValue = number;
    } else {
      this.oddCounterValue = number;
    }
  }



  GamePausing(){

  }
  ngOnDestroy(): void {

  }
}
