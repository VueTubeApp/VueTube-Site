import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-section',
  templateUrl: './top-section.component.html',
  styleUrls: ['./top-section.component.css']
})
export class TopSectionComponent implements OnInit {
  currentTheme = 'dark';
  constructor() { }

  ngOnInit(): void {
    //auto set light/dark mode based on OS preferences
    let matched = window.matchMedia('(prefers-color-scheme: light)').matches;
    if(matched === true) {
      var currentTheme = document.querySelectorAll(".mat-app-background");
      for(var i = 0; i < currentTheme.length; i++) {
        if(currentTheme[i].classList.contains("light-theme")) {
          currentTheme[i].classList.remove("light-theme");
        } else {
          currentTheme[i].classList.add("light-theme");
        }

      }
    }
    //_after_ above, check cookie to see if stored,
    //if so, apply that theme instead as override
    var themeCookie = localStorage.getItem('currentTheme');
    if(themeCookie == "dark") {}
    else if (themeCookie == "light") {
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

}
