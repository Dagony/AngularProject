import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyA61KBuwF0Q54WEpHT3z3_7pRxBd30BM-o",
      authDomain: "ng-recipe-book-ac18b.firebaseapp.com",
      databaseURL: "https://ng-recipe-book-ac18b.firebaseio.com",
      projectId: "ng-recipe-book-ac18b",
      storageBucket: "ng-recipe-book-ac18b.appspot.com",
      messagingSenderId: "784704007810"
    });
  }
}
