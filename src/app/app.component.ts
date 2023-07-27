import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  title = 'even-odd';

  oddNumbers: number[] = [];
  evenNumbers: number[]= []; // Initialize to 1 since the first emitted number will be 1

  GameStarting(IncreNumber: number) {
    if (IncreNumber % 2 === 0) {
      this.evenNumbers.push(IncreNumber);
    } else {
      this.oddNumbers.push(IncreNumber);
    }
  }

  ngOnDestroy(): void {

  }
}
