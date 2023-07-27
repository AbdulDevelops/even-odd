import { Component, EventEmitter, OnInit, Output, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
@Output() startingTheGame = new EventEmitter<number>();
//@Output() pausingTheGame = new EventEmitter<number>();

count: number|any = 0;
interval:any;
constructor(){
}

/* ngOnInit(): void {
  this.onStartGame();

} */
  onStartGame(){
this.interval=setInterval(()=>{
  this.count++;
  this.startingTheGame.emit(this.count);

}, 1000)
}

  onPauseGame(){
   clearInterval(this.interval)
  }

/* ngOnDestroy(): void {
  this.onPauseGame()
} */
}
