import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit {
  @Input() oddCount: number = 1;
  //interval: any;

  ngOnInit() {
    // Start the counter for even numbers when the component initializes
    //this.startEvenCounter();
  }

/*   startEvenCounter() {
    // Set an interval that increases the evenCount by 2 every 2 seconds (2000 ms)
    this.interval = setInterval(() => {
      this.oddCount += 2;
    }, 2000);
  }
 */
}
