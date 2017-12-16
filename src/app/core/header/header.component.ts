import { Component } from '@angular/core';

import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';
// import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  templateUrl: './header.component.html' ,
  selector: 'app-header' ,
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {  }

  onSaveData() {
    this.dataStorageService.storeRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
