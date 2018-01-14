import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root', templateUrl: './app.component.html', styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA61KBuwF0Q54WEpHT3z3_7pRxBd30BM-o", authDomain: "ng-recipe-book-ac18b.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
