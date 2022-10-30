import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  baseUrl: string =
    'https://ss-aka-ori.ladbrokes.com/openbet-ssviewer/Drilldown/2.31/';
  constructor(public http: HttpClient) {}
  getClassIds() {
    return this.http.get(
      this.baseUrl +
        'Class?translationLang=en&responseFormat=json&simpleFilter=class.categoryId:equals:16&simpleFilter=class.isActive&simpleFilter=class.siteChannels:contains:M&simpleFilter=class.hasOpenEvent'
    );
  }
  getLeagues() {
    return this.http.get(
      this.baseUrl +
        '/ClassToSubTypeForClass/97?translationLang=en&responseFormat=json&simpleFilter=type.hasOpenEvent:isTrue'
    );
  }

  getMostSuitableBet() {}
}
