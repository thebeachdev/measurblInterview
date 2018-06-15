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
            console.log(groupA);
            // [{ "id":2, "age":5 }]
            // for (let user in groupA) {
            // }
            // Did have time to get this working, but it would be something like this.
            // for (let aUser in groupB) {
            //   for (anotherUser in groupA) {
            //     if (aUser.id === anotherUser.id) {
            //       aUser.push({ age: aUser.age});
            //     }
            //   }
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
