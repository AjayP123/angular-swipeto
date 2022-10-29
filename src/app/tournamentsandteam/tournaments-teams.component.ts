import { Component } from '@angular/core';
import {} from './../app.service.ts';

@Component({
  selector: 'tournament-teams',
  templateUrl: './tournaments-teams.component.html',
  styleUrls: ['./tournaments-teams.component.css'],
})
export class TournamentAndTeamsComponent {
  classIdsAndNamesMap = new Map<string, number>();
  constructor(public appService: AppService) {}

  ngOnInit() {
    this.appService.getClassId().subscribe((data: any) => {
      this.dataMapper(data.SSResponse.children);
    });
  }
  dataMapper(d) {
    d.forEach((object) => {
      this.classIdsAndNamesMap.set(object.class.name, object.id);
    });
    console.log(this.classIdsAndNamesMap);
  }
}
