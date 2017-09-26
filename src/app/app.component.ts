import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loadedItem = 'recipes';

  onNavigate(item: string) {
    this.loadedItem = item;
  }

}
