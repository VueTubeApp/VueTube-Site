import { Component, OnInit } from '@angular/core';
import { faCode,
         faPuzzlePiece,
         faMobileAlt,
         faBolt
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent implements OnInit {
  faCode = faCode;
  faPuzzlePiece = faPuzzlePiece;
  faMobileAlt = faMobileAlt;
  faBolt = faBolt;

  constructor() { }

  ngOnInit(): void {
  }

}
