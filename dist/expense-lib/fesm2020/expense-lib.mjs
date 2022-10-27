import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';
import * as i1 from '@angular/common/http';
import { Subject } from 'rxjs';
import * as i3 from 'angular-datatables';
import { DataTablesModule } from 'angular-datatables';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';

class ExpenseLibService {
    constructor(http) {
        this.http = http;
        this.that = this;
        this.expenseData = [
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
        ];
    }
    getData() {
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
    getDataWithPaging(dtParams) {
        return this.http.get("expenseData.json"); //UsersJson;//this.http.put(`${this.corsUrl}${this.baseUrl}`, dtParams);          
    }
}
ExpenseLibService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibService, deps: [{ token: i1.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
ExpenseLibService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }]; } });

var UsersJson = [
	{
		requestedby: "Michael Williams",
		datetime: "22-10-2022 20:30",
		traveller: "Michael Williams",
		costcenter: "NY",
		client: "Lazard",
		travelcost: 100,
		hotelcost: 50,
		country: "USA"
	},
	{
		requestedby: "Michael Williams",
		datetime: "22-10-2022 20:35",
		traveller: "Michael Williams",
		costcenter: "NY",
		client: "Lazard",
		travelcost: 100,
		hotelcost: 15,
		country: "USA"
	},
	{
		requestedby: "Michael Williams",
		datetime: "22-10-2022 20:37",
		traveller: "Michael Williams",
		costcenter: "NY",
		client: "Lazard",
		travelcost: 100,
		hotelcost: 10,
		country: "USA"
	},
	{
		requestedby: "Michael Williams",
		datetime: "22-10-2022 20:30",
		traveller: "Michael Williams",
		costcenter: "NY",
		client: "Lazard",
		travelcost: 100,
		hotelcost: 50,
		country: "USA"
	}
];

class ExpenseLibComponent {
    constructor(http, httpService) {
        this.http = http;
        this.httpService = httpService;
        this.dtOptions = {};
        this.dtTrigger = new Subject();
        this.policiesData = [];
        this.expenseData = [
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
        ];
    }
    ngOnInit() {
        debugger;
        const that = this;
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            //   serverSide: true,
            processing: true,
            //  columns: [{ data: 'Name' }]
        };
        that.policiesData = UsersJson;
        console.log("this is response: " + UsersJson);
        setTimeout(() => {
            this.dtTrigger.next(UsersJson);
        }, 300);
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
}
ExpenseLibComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibComponent, deps: [{ token: i1.HttpClient }, { token: ExpenseLibService }], target: i0.ɵɵFactoryTarget.Component });
ExpenseLibComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.7", type: ExpenseLibComponent, selector: "lib-ExpenseLib", ngImport: i0, template: "<div class=\"rightcentermain\">\n    <div class=\"rightcentermaininn\">\n        <div class=\"container-fluid\">\n            <div class=\"expenserequest\">\n                <div class=\"row md-2\">\n                    <div class=\"general_heading mb-2\">\n                        <h3>Expense Request</h3>\n                    </div>\n                    <div class=\"fieldInputdata\">\n                        <select class=\"form-control\">\n                            <option value=\"travelByAir\">Travel By Air</option>\n                            <option value=\"train\">Train</option>\n                            <option value=\"clientEnter\">Client Entertainment</option>\n                            <option value=\"teamStrategyDay\">Team Strategy Day</option>\n                        </select>\n                    </div>\n                    <br>\n                    <br>\n\n                    <div class=\"col-lg-6 mb-2\">\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Requested By:</h3>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>First Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>Last Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Main Traveller:</h3>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>First Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>Last Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Additional traveller:</h3>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>First Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>Last Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Cost Center</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>Michael Williams</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Date of Travel:</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"datetime-local\" />\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Client Name/ Contact & Nature of Trip:</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"text\" />\n                            </div>\n\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Travel Cost</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"number\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 mb-2\">\n\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Hotel Cost :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"number\" />\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>No of nights stay :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"number\" />\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Country of Travel :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Project code :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>BD code :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>InHouse code :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Additional Comments :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <textarea name=\"\" id=\"\" cols=\"30\" rows=\"2\" class=\"form-control\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Attachments :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input type=\"file\" id=\"myfile\" class=\"form-control\" name=\"myfile\">\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-12 my-4\">\n                        <div class=\"expensesubmitbtn text-end\">\n                            <button>Submit</button>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n            <div class=\"expenselist\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"general_heading mb-2\">\n                            <h3>Expense List</h3>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <div class=\"table-responsive\">\n                            <table id=\"tble3\" name=\"tble3\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"table table-striped table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Requested By</th>\n                                        <th>Date/Time</th>\n                                        <th>Traveller</th>\n                                        <th>Cost Center</th>\n                                        <th>Client/Contact & Nature of Trip</th>\n                                        <th>Travel Cost</th>\n                                        <th>Hotel Cost</th>\n                                        <th>Country</th>\n\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let person of policiesData\">\n\n\n                                        <td>{{ person.requestedby }}</td>\n                                        <td>{{ person.datetime }}</td>\n                                        <td>{{ person.traveller }}</td>\n                                        <td>{{ person.costcenter }}</td>\n                                        <td>{{ person.client }}</td>\n                                        <td>{{ person.travelcost }}</td>\n                                        <td>{{ person.hotelcost }}</td>\n                                        <td>{{ person.country }}</td>\n\n                                    </tr>\n                                </tbody>\n\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", dependencies: [{ kind: "directive", type: i3.DataTableDirective, selector: "[datatable]", inputs: ["dtOptions", "dtTrigger"] }, { kind: "directive", type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-ExpenseLib', template: "<div class=\"rightcentermain\">\n    <div class=\"rightcentermaininn\">\n        <div class=\"container-fluid\">\n            <div class=\"expenserequest\">\n                <div class=\"row md-2\">\n                    <div class=\"general_heading mb-2\">\n                        <h3>Expense Request</h3>\n                    </div>\n                    <div class=\"fieldInputdata\">\n                        <select class=\"form-control\">\n                            <option value=\"travelByAir\">Travel By Air</option>\n                            <option value=\"train\">Train</option>\n                            <option value=\"clientEnter\">Client Entertainment</option>\n                            <option value=\"teamStrategyDay\">Team Strategy Day</option>\n                        </select>\n                    </div>\n                    <br>\n                    <br>\n\n                    <div class=\"col-lg-6 mb-2\">\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Requested By:</h3>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>First Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>Last Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Main Traveller:</h3>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>First Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>Last Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Additional traveller:</h3>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>First Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"general_subheading mb-1\">\n                                    <h3>Last Name</h3>\n                                </div>\n                                <div class=\"fieldInputdata\">\n                                    <input class=\"form-control\" type=\"text\" />\n                                </div>\n                            </div>\n\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Cost Center</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>Michael Williams</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Date of Travel:</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"datetime-local\" />\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Client Name/ Contact & Nature of Trip:</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"text\" />\n                            </div>\n\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Travel Cost</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"number\" />\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-6 mb-2\">\n\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Hotel Cost :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"number\" />\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>No of nights stay :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input class=\"form-control\" type=\"number\" />\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Country of Travel :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Project code :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>BD code :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>InHouse code :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <select class=\"form-control\">\n                                    <option>Choose...</option>\n                                    <option>USA</option>\n                                </select>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Additional Comments :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <textarea name=\"\" id=\"\" cols=\"30\" rows=\"2\" class=\"form-control\"></textarea>\n                            </div>\n                        </div>\n                        <div class=\"row mb-2\">\n                            <div class=\"general_subheading mb-1\">\n                                <h3>Attachments :</h3>\n                            </div>\n                            <div class=\"fieldInputdata\">\n                                <input type=\"file\" id=\"myfile\" class=\"form-control\" name=\"myfile\">\n                            </div>\n                        </div>\n\n                    </div>\n                    <div class=\"col-lg-12 my-4\">\n                        <div class=\"expensesubmitbtn text-end\">\n                            <button>Submit</button>\n                        </div>\n                    </div>\n\n\n                </div>\n            </div>\n            <div class=\"expenselist\">\n                <div class=\"row\">\n                    <div class=\"col-lg-12\">\n                        <div class=\"general_heading mb-2\">\n                            <h3>Expense List</h3>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-12\">\n                        <div class=\"table-responsive\">\n                            <table id=\"tble3\" name=\"tble3\" datatable [dtOptions]=\"dtOptions\" [dtTrigger]=\"dtTrigger\"\n                                class=\"table table-striped table-hover\">\n                                <thead>\n                                    <tr>\n                                        <th>Requested By</th>\n                                        <th>Date/Time</th>\n                                        <th>Traveller</th>\n                                        <th>Cost Center</th>\n                                        <th>Client/Contact & Nature of Trip</th>\n                                        <th>Travel Cost</th>\n                                        <th>Hotel Cost</th>\n                                        <th>Country</th>\n\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr *ngFor=\"let person of policiesData\">\n\n\n                                        <td>{{ person.requestedby }}</td>\n                                        <td>{{ person.datetime }}</td>\n                                        <td>{{ person.traveller }}</td>\n                                        <td>{{ person.costcenter }}</td>\n                                        <td>{{ person.client }}</td>\n                                        <td>{{ person.travelcost }}</td>\n                                        <td>{{ person.hotelcost }}</td>\n                                        <td>{{ person.country }}</td>\n\n                                    </tr>\n                                </tbody>\n\n                            </table>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>" }]
        }], ctorParameters: function () { return [{ type: i1.HttpClient }, { type: ExpenseLibService }]; } });

class ExpenseLibModule {
}
ExpenseLibModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
ExpenseLibModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibModule, declarations: [ExpenseLibComponent], imports: [DataTablesModule,
        CommonModule], exports: [ExpenseLibComponent] });
ExpenseLibModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibModule, imports: [DataTablesModule,
        CommonModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.7", ngImport: i0, type: ExpenseLibModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        ExpenseLibComponent,
                        // ExpenseFormComponent
                    ],
                    imports: [
                        DataTablesModule,
                        CommonModule
                    ],
                    exports: [
                        ExpenseLibComponent,
                        // ExpenseFormComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of expense-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExpenseLibComponent, ExpenseLibModule, ExpenseLibService };
//# sourceMappingURL=expense-lib.mjs.map
