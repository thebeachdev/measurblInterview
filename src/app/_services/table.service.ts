// table.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableService {
  constructor(private http: HttpClient) {}
  groupA = 'https://api.myjson.com/bins/xqrsi';
  groupB = 'https://api.myjson.com/bins/szaya';
  getGroupA() {
    return this.http.get(this.groupA);
  }
  getGroupB() {
    return this.http.get(this.groupB);
  }
}
