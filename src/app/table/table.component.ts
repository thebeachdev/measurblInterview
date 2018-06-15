import { Component, OnInit } from '@angular/core';
import { TableService } from '../_services/table.service';
import { Table } from '../_models/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  users: any = {};
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      firstName: {
        title: 'First Name'
      },
      lastName: {
        title: 'Last Name'
      },
      age: {
        title: 'Age'
      }
    }
  };
  constructor(private tblService: TableService) {}

  ngOnInit() {
    this.tblService.getGroupA().subscribe(
      groupA => {
        this.tblService.getGroupB().subscribe(
          groupB => {
            console.log(groupB);
            // [{ "id":2, "age":5 }]
            // for (let user in groupA) {
            // }
            this.users = groupB; // an array of obejcts [{...}, {...}]
          }, error => {
            console.log(error);
          });
      },
      error => {
        console.log(error);
      }
    );
  }
}
