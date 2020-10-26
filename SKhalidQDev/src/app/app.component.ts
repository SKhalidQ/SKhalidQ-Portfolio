import { Component, HostListener, OnInit } from '@angular/core';
import { ThemeModesService } from './Services/theme-modes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  progress: boolean = false;
  showFiller = false;
  lightMode: boolean = false;
  
  constructor(public themeModes: ThemeModesService) { }
  
  ngOnInit(): void {
    console.log(window.innerWidth);
  }
}
