import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  easterEggTxt = "Click Me!";
  easterEgg: number = 1;
  audioPlaying: boolean = false;
  soundtrack = new Audio('../../assets/Evolution.flac');

  constructor() { }

  ngOnInit(): void {
  }

  Evolution() {
    if (this.audioPlaying == true) {
      this.EvolutionStop();
    } else {
      this.EvolutionPlay();
    }
  }

  EvolutionPlay() {
    if (this.easterEgg < 10) {
      this.easterEgg ++;
    } else if (this.easterEgg == 10) {
      this.soundtrack.play();
      this.audioPlaying = true;
      this.easterEggTxt = "Stop";
    }
  }

  EvolutionStop() {
    this.soundtrack.pause();
    this.soundtrack.currentTime = 0;
    this.easterEgg = 1;
    this.audioPlaying = false;
    this.easterEggTxt = "Click Me!";
  }

}
