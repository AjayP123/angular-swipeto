import { Component } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'tournament-teams',
  templateUrl: './tournaments-teams.component.html',
  styleUrls: ['./tournaments-teams.component.css'],
})
export class TournamentAndTeamsComponent {
  classIdsAndNamesMap: Array<any> = [];
  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.getClassIds().subscribe((data: any) => {
      this.dataMapper(data.SSResponse.children);
    });
  }
  dataMapper(d) {
    d.forEach((object) => {
      this.classIdsAndNamesMap.push({
        name: object?.class?.name,
        id: object?.class?.id,
      });
    });
    console.log(this.classIdsAndNamesMap);
  }
  addToActive(index) {
    if (!this.classIdsAndNamesMap[index].isActive) {
      this.classIdsAndNamesMap[index].isActive = true;
    } else {
      this.classIdsAndNamesMap[index].isActive = false;
    }
  }
}
