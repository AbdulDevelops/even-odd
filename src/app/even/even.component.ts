import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {

  @Input() evenCount: number = 0;

  //interval: any;

  ngOnInit() {
    // Start the counter for even numbers when the component initializes
   // this.startEvenCounter();
  }

  /* startEvenCounter() {
    // Set an interval that increases the evenCount by 2 every 2 seconds (2000 ms)
    this.interval = setInterval(() => {
      this.evenCount += 2;
    }, 2000);
  }
 */
}
