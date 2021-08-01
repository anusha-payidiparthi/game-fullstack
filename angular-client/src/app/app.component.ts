import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalDataService } from './services/global-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-client';
  isUserAvailable = false;
  subscription: any = '';
  constructor(private globalDataService: GlobalDataService, private router: Router) {
    this.subscription = this.globalDataService.loggedInSubject.subscribe((message) => {
      this.isUserAvailable = message;
    });
    if (window.localStorage.getItem('user_data')) {
      this.isUserAvailable = true;
    } else {
      this.isUserAvailable = false;
    }
  }


  logout() {
    this.globalDataService.remove('user_data');
    this.router.navigate(['']);
    this.isUserAvailable = false;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
