import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
//import {  } from "projects/expense-lib/src/lib/expense-form/expenseData.json";
import UsersJson from "./expenseData.json";
import { ExpenseLibService } from "./expense-lib.service";
interface USERS {
  requestedby: Number;
  datetime: String;
  traveller: String;
  costcenter: String;
  client: String;
  travelcost: String;
  hotelcost: String;
  country: String;
}
@Component({
  selector: 'lib-ExpenseLib',
  templateUrl: './expense-lib.component.html',
  styles: [
  ]
})
export class ExpenseLibComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  policiesData: any = [];

  constructor(private http: HttpClient, private httpService: ExpenseLibService) { }


  ngOnInit(): void {
    debugger;
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      //   serverSide: true,

      processing: true,
      //  columns: [{ data: 'Name' }]
    };
    that.policiesData = UsersJson; console.log("this is response: " + UsersJson);
    setTimeout(() => {
      this.dtTrigger.next(UsersJson);
    }, 300)



    //     that.httpService.getData().pipe((resp:any )=> { 
    //       debugger;
    //       that.policiesData = resp; console.log("this is response: "+resp);
    //       this.dtTrigger.next(resp)
    //       console.log("this is response: "+resp);
    //   },
    //   (error: any) => {
    //     console.log("Error: ");
    //     console.log(error)
    //   }
    // );

    // this.dtTrigger.next(this.expenseData)
    /* const that = this;
      that.policiesData = this.expenseData;
     this.dtOptions = {
       pagingType: 'full_numbers',
       pageLength: 10,
       serverSide: true,
       processing: true,
       columns: [{ data: 'Name' }]
     };
   
      //expenseData.json
       this.dtTrigger.next(this.expenseData)*/
  }
  expenseData: any = [
    {

      "requestedby": "Michael Williams45",
      "datetime": "22-10-2022 20:30",
      "traveller": "Michael Williams65",
      "costcenter": "NY",
      "client": "Lazard",
      "travelcost": 100,
      "hotelcost": 50,
      "country": "USA"

    },
    {

      "requestedby": "Michael Williams6546",
      "datetime": "22-10-2022 20:30",
      "traveller": "Michael Williams456546",
      "costcenter": "NY",
      "client": "Lazard",
      "travelcost": 100,
      "hotelcost": 15,
      "country": "USA"

    },
    {

      "requestedby": "Michael Williams54654",
      "datetime": "22-10-2022 20:30",
      "traveller": "Michael Williams45654",
      "costcenter": "NY",
      "client": "Lazard",
      "travelcost": 100,
      "hotelcost": 10,
      "country": "USA"

    },
    {

      "requestedby": "Michael Williams",
      "datetime": "22-10-2022 20:30",
      "traveller": "Michael Williams",
      "costcenter": "NY",
      "client": "Lazard",
      "travelcost": 100,
      "hotelcost": 50,
      "country": "USA"

    }

  ]

}
