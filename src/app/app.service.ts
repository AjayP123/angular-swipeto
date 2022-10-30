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

  getMostSuitableBet() {
    return this.http.get(
      this.baseUrl +
        'EventToOutcomeForType/442?simpleFilter=event.eventSortCode:notIntersects:TNMT,TR01,TR02,TR03,TR04,TR05,TR06,TR07,TR08,TR09,TR10,TR11,TR12,TR13,TR14,TR15,TR16,TR17,TR18,TR19,TR20&simpleFilter=market.templateMarketName:intersects:|Match%20Betting|&translationLang=en&responseFormat=json&prune=event&prune=market&childCount=event'
    );
  }
}
