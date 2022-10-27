import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { data } from 'jquery';
import { Observable } from 'rxjs';
import {  } from "../lib/expenseData.json";

@Injectable({
  providedIn: 'root'
})
export class ExpenseLibService {
 

  constructor(private http: HttpClient) { }
 that = this
  getData(): any  { 
    debugger; 
  let Data = this.expenseData;
  return Data;
//     // const datas1 = this.http.get<any[]>("expenseData.json").subscribe((resp:any )=> { 
//     //   debugger;
//     //  let test= resp; 
//   // },
//   // (error: any) => {
//   //   console.log("Error: ");
//   //   console.log(error)
//   // }
// //);
  
     
//     const datas2 =this.http.get<any[]>("../expenseData.json").subscribe((resp:any )=> { 
//       debugger;
//      let test= resp; 
//   },
//   (error: any) => {
//     console.log("Error: ");
//     console.log(error)
//   }
// );
//     const datas3 =this.http.get<any[]>("../../../expenseData.json").subscribe((resp:any )=> { 
//       debugger;
//      let test= resp; 
//   },
//   (error: any) => {
//     console.log("Error: ");
//     console.log(error)
//   }
// );
//     const datas4 =this.http.get<any[]>("/expenseData.json").subscribe((resp:any )=> { 
//       debugger;
//      let test= resp; 
//   },
//   (error: any) => {
//     console.log("Error: ");
//     console.log(error)
//   }
// );
// debugger;
// let data5: any;
//     //console.log(datas1);
//     console.log(datas2);
//     console.log(datas3);
//     console.log(datas4);
//     const datas =this.http.get<any[]>("../../expenseData.json");//UsersJson;//this.http.get<any[]>(`${this.corsUrl}${this.baseUrl}`);     

//     return datas;
}  

getDataWithPaging(dtParams: any): any {  
    return this.http.get("expenseData.json");//UsersJson;//this.http.put(`${this.corsUrl}${this.baseUrl}`, dtParams);          
}  


expenseData  = [
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
