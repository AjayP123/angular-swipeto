import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private route: Router) {}
  title = 'app works!';
  sports = [
    { name: 'Football', categoryId: 16, isActive: false },
    { name: 'Tennis', categoryId: 34, isActive: false },
    { name: 'American Football', categoryId: 1, isActive: false },
    { name: 'Boxing', categoryId: 2, isActive: false },
  ];
  selectSports(sportsIndex: number) {
    if (
      this.sports &&
      this.sports[sportsIndex] &&
      !this.sports[sportsIndex].isActive
    ) {
      this.sports[sportsIndex].isActive = true;
    } else {
      this.sports[sportsIndex].isActive = false;
    }
  }

  next() {
    this.route.navigateByUrl('/tournamets');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
