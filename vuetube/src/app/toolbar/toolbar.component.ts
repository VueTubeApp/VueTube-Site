import { Component, OnInit } from '@angular/core';
import { faGithub, faReddit, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  faGithub = faGithub;
  faReddit = faReddit;
  faDiscord = faDiscord;
  faFillDrip = faFillDrip;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDarkmode(){
    //whether user prefers light/dark should be stored
    //for now, just a quick and dirty toggle in the navbar
    var currentTheme = document.querySelectorAll(".mat-app-background");
    for(var i = 0; i < currentTheme.length; i++) {
      if(currentTheme[i].classList.contains("light-theme")) {
        currentTheme[i].classList.remove("light-theme");
        localStorage.setItem('currentTheme', 'dark');
      } else {
        currentTheme[i].classList.add("light-theme");
        localStorage.setItem('currentTheme', 'light');
      }

    }
  }

}
