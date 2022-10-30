import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.css'],
})
export class LeaguesComponent {
  name = new FormControl('');
  classIdsAndNamesMap: Array<any> = [];
  searchObject: Array<any>;
  constructor(public appService: AppService, private route: Router) {}

  ngOnInit() {
    this.appService.getLeagues().subscribe((data: any) => {
      this.dataMapper(data.SSResponse.children[0].class.children);
    });
    this.name.valueChanges.subscribe((data) => {
      this.searchObject = this.classIdsAndNamesMap.filter((datafilter) => {
        return datafilter?.name?.includes(data);
      });
    });
  }
  dataMapper(d) {
    d.forEach((object) => {
      this.classIdsAndNamesMap.push({
        name: object?.type?.name,
        id: object?.type?.id,
      });
    });
    this.searchObject = this.classIdsAndNamesMap;
    console.log(this.classIdsAndNamesMap);
  }
  addToActive(index) {
    if (!this.searchObject[index].isActive) {
      this.searchObject[index].isActive = true;
    } else {
      this.searchObject[index].isActive = false;
    }
  }
  next() {
    this.route.navigateByUrl('/bets');
  }
}
