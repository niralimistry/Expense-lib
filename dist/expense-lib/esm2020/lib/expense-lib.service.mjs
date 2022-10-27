import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
export class ExpenseLibService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZS1saWIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2V4cGVuc2UtbGliL3NyYy9saWIvZXhwZW5zZS1saWIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFRM0MsTUFBTSxPQUFPLGlCQUFpQjtJQUc1QixZQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ3JDLFNBQUksR0FBRyxJQUFJLENBQUE7UUEyRFosZ0JBQVcsR0FBSTtZQUNiO2dCQUVFLGFBQWEsRUFBRSxvQkFBb0I7Z0JBQ25DLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLFdBQVcsRUFBRSxvQkFBb0I7Z0JBQ2pDLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsWUFBWSxFQUFFLEdBQUc7Z0JBQ2pCLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFNBQVMsRUFBRSxLQUFLO2FBRWpCO1lBQ0Q7Z0JBRUUsYUFBYSxFQUFFLHNCQUFzQjtnQkFDckMsVUFBVSxFQUFFLGtCQUFrQjtnQkFDOUIsV0FBVyxFQUFFLHdCQUF3QjtnQkFDckMsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFFBQVEsRUFBRSxRQUFRO2dCQUNsQixZQUFZLEVBQUUsR0FBRztnQkFDakIsV0FBVyxFQUFFLEVBQUU7Z0JBQ2YsU0FBUyxFQUFFLEtBQUs7YUFFakI7WUFDRDtnQkFFRSxhQUFhLEVBQUUsdUJBQXVCO2dCQUN0QyxVQUFVLEVBQUUsa0JBQWtCO2dCQUM5QixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFlBQVksRUFBRSxHQUFHO2dCQUNqQixXQUFXLEVBQUUsRUFBRTtnQkFDZixTQUFTLEVBQUUsS0FBSzthQUVqQjtZQUNEO2dCQUVFLGFBQWEsRUFBRSxrQkFBa0I7Z0JBQ2pDLFVBQVUsRUFBRSxrQkFBa0I7Z0JBQzlCLFdBQVcsRUFBRSxrQkFBa0I7Z0JBQy9CLFlBQVksRUFBRSxJQUFJO2dCQUNsQixRQUFRLEVBQUUsUUFBUTtnQkFDbEIsWUFBWSxFQUFFLEdBQUc7Z0JBQ2pCLFdBQVcsRUFBRSxFQUFFO2dCQUNmLFNBQVMsRUFBRSxLQUFLO2FBRWpCO1NBRUYsQ0FBQTtJQTlHeUMsQ0FBQztJQUV6QyxPQUFPO1FBQ0wsUUFBUSxDQUFDO1FBQ1gsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM1QixPQUFPLElBQUksQ0FBQztRQUNkLDRGQUE0RjtRQUM1RixxQkFBcUI7UUFDckIsMkJBQTJCO1FBQzNCLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsaUNBQWlDO1FBQ2pDLDRCQUE0QjtRQUM1QixTQUFTO1FBQ1QsT0FBTztRQUdQLDJGQUEyRjtRQUMzRixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLGlHQUFpRztRQUNqRyxrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLHlGQUF5RjtRQUN6RixrQkFBa0I7UUFDbEIsd0JBQXdCO1FBQ3hCLE9BQU87UUFDUCxzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLHlCQUF5QjtRQUN6QixNQUFNO1FBQ04sS0FBSztRQUNMLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsNkJBQTZCO1FBQzdCLDJCQUEyQjtRQUMzQiwyQkFBMkI7UUFDM0IsMkJBQTJCO1FBQzNCLDZJQUE2STtRQUU3SSxvQkFBb0I7SUFDcEIsQ0FBQztJQUVELGlCQUFpQixDQUFDLFFBQWE7UUFDM0IsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUEsa0ZBQWtGO0lBQy9ILENBQUM7OzhHQTVEWSxpQkFBaUI7a0hBQWpCLGlCQUFpQixjQUZoQixNQUFNOzJGQUVQLGlCQUFpQjtrQkFIN0IsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZGF0YSB9IGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyAgfSBmcm9tIFwiLi4vbGliL2V4cGVuc2VEYXRhLmpzb25cIjtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXhwZW5zZUxpYlNlcnZpY2Uge1xuIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XG4gdGhhdCA9IHRoaXNcbiAgZ2V0RGF0YSgpOiBhbnkgIHsgXG4gICAgZGVidWdnZXI7IFxuICBsZXQgRGF0YSA9IHRoaXMuZXhwZW5zZURhdGE7XG4gIHJldHVybiBEYXRhO1xuLy8gICAgIC8vIGNvbnN0IGRhdGFzMSA9IHRoaXMuaHR0cC5nZXQ8YW55W10+KFwiZXhwZW5zZURhdGEuanNvblwiKS5zdWJzY3JpYmUoKHJlc3A6YW55ICk9PiB7IFxuLy8gICAgIC8vICAgZGVidWdnZXI7XG4vLyAgICAgLy8gIGxldCB0ZXN0PSByZXNwOyBcbi8vICAgLy8gfSxcbi8vICAgLy8gKGVycm9yOiBhbnkpID0+IHtcbi8vICAgLy8gICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4vLyAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpXG4vLyAgIC8vIH1cbi8vIC8vKTtcbiAgXG4gICAgIFxuLy8gICAgIGNvbnN0IGRhdGFzMiA9dGhpcy5odHRwLmdldDxhbnlbXT4oXCIuLi9leHBlbnNlRGF0YS5qc29uXCIpLnN1YnNjcmliZSgocmVzcDphbnkgKT0+IHsgXG4vLyAgICAgICBkZWJ1Z2dlcjtcbi8vICAgICAgbGV0IHRlc3Q9IHJlc3A7IFxuLy8gICB9LFxuLy8gICAoZXJyb3I6IGFueSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcilcbi8vICAgfVxuLy8gKTtcbi8vICAgICBjb25zdCBkYXRhczMgPXRoaXMuaHR0cC5nZXQ8YW55W10+KFwiLi4vLi4vLi4vZXhwZW5zZURhdGEuanNvblwiKS5zdWJzY3JpYmUoKHJlc3A6YW55ICk9PiB7IFxuLy8gICAgICAgZGVidWdnZXI7XG4vLyAgICAgIGxldCB0ZXN0PSByZXNwOyBcbi8vICAgfSxcbi8vICAgKGVycm9yOiBhbnkpID0+IHtcbi8vICAgICBjb25zb2xlLmxvZyhcIkVycm9yOiBcIik7XG4vLyAgICAgY29uc29sZS5sb2coZXJyb3IpXG4vLyAgIH1cbi8vICk7XG4vLyAgICAgY29uc3QgZGF0YXM0ID10aGlzLmh0dHAuZ2V0PGFueVtdPihcIi9leHBlbnNlRGF0YS5qc29uXCIpLnN1YnNjcmliZSgocmVzcDphbnkgKT0+IHsgXG4vLyAgICAgICBkZWJ1Z2dlcjtcbi8vICAgICAgbGV0IHRlc3Q9IHJlc3A7IFxuLy8gICB9LFxuLy8gICAoZXJyb3I6IGFueSkgPT4ge1xuLy8gICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlcnJvcilcbi8vICAgfVxuLy8gKTtcbi8vIGRlYnVnZ2VyO1xuLy8gbGV0IGRhdGE1OiBhbnk7XG4vLyAgICAgLy9jb25zb2xlLmxvZyhkYXRhczEpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGFzMik7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YXMzKTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhczQpO1xuLy8gICAgIGNvbnN0IGRhdGFzID10aGlzLmh0dHAuZ2V0PGFueVtdPihcIi4uLy4uL2V4cGVuc2VEYXRhLmpzb25cIik7Ly9Vc2Vyc0pzb247Ly90aGlzLmh0dHAuZ2V0PGFueVtdPihgJHt0aGlzLmNvcnNVcmx9JHt0aGlzLmJhc2VVcmx9YCk7ICAgICBcblxuLy8gICAgIHJldHVybiBkYXRhcztcbn0gIFxuXG5nZXREYXRhV2l0aFBhZ2luZyhkdFBhcmFtczogYW55KTogYW55IHsgIFxuICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KFwiZXhwZW5zZURhdGEuanNvblwiKTsvL1VzZXJzSnNvbjsvL3RoaXMuaHR0cC5wdXQoYCR7dGhpcy5jb3JzVXJsfSR7dGhpcy5iYXNlVXJsfWAsIGR0UGFyYW1zKTsgICAgICAgICAgXG59ICBcblxuXG5leHBlbnNlRGF0YSAgPSBbXG4gIHtcblxuICAgIFwicmVxdWVzdGVkYnlcIjogXCJNaWNoYWVsIFdpbGxpYW1zNDVcIixcbiAgICBcImRhdGV0aW1lXCI6IFwiMjItMTAtMjAyMiAyMDozMFwiLFxuICAgIFwidHJhdmVsbGVyXCI6IFwiTWljaGFlbCBXaWxsaWFtczY1XCIsXG4gICAgXCJjb3N0Y2VudGVyXCI6IFwiTllcIixcbiAgICBcImNsaWVudFwiOiBcIkxhemFyZFwiLFxuICAgIFwidHJhdmVsY29zdFwiOiAxMDAsXG4gICAgXCJob3RlbGNvc3RcIjogNTAsXG4gICAgXCJjb3VudHJ5XCI6IFwiVVNBXCJcblxuICB9LFxuICB7XG5cbiAgICBcInJlcXVlc3RlZGJ5XCI6IFwiTWljaGFlbCBXaWxsaWFtczY1NDZcIixcbiAgICBcImRhdGV0aW1lXCI6IFwiMjItMTAtMjAyMiAyMDozMFwiLFxuICAgIFwidHJhdmVsbGVyXCI6IFwiTWljaGFlbCBXaWxsaWFtczQ1NjU0NlwiLFxuICAgIFwiY29zdGNlbnRlclwiOiBcIk5ZXCIsXG4gICAgXCJjbGllbnRcIjogXCJMYXphcmRcIixcbiAgICBcInRyYXZlbGNvc3RcIjogMTAwLFxuICAgIFwiaG90ZWxjb3N0XCI6IDE1LFxuICAgIFwiY291bnRyeVwiOiBcIlVTQVwiXG5cbiAgfSxcbiAge1xuXG4gICAgXCJyZXF1ZXN0ZWRieVwiOiBcIk1pY2hhZWwgV2lsbGlhbXM1NDY1NFwiLFxuICAgIFwiZGF0ZXRpbWVcIjogXCIyMi0xMC0yMDIyIDIwOjMwXCIsXG4gICAgXCJ0cmF2ZWxsZXJcIjogXCJNaWNoYWVsIFdpbGxpYW1zNDU2NTRcIixcbiAgICBcImNvc3RjZW50ZXJcIjogXCJOWVwiLFxuICAgIFwiY2xpZW50XCI6IFwiTGF6YXJkXCIsXG4gICAgXCJ0cmF2ZWxjb3N0XCI6IDEwMCxcbiAgICBcImhvdGVsY29zdFwiOiAxMCxcbiAgICBcImNvdW50cnlcIjogXCJVU0FcIlxuXG4gIH0sXG4gIHtcblxuICAgIFwicmVxdWVzdGVkYnlcIjogXCJNaWNoYWVsIFdpbGxpYW1zXCIsXG4gICAgXCJkYXRldGltZVwiOiBcIjIyLTEwLTIwMjIgMjA6MzBcIixcbiAgICBcInRyYXZlbGxlclwiOiBcIk1pY2hhZWwgV2lsbGlhbXNcIixcbiAgICBcImNvc3RjZW50ZXJcIjogXCJOWVwiLFxuICAgIFwiY2xpZW50XCI6IFwiTGF6YXJkXCIsXG4gICAgXCJ0cmF2ZWxjb3N0XCI6IDEwMCxcbiAgICBcImhvdGVsY29zdFwiOiA1MCxcbiAgICBcImNvdW50cnlcIjogXCJVU0FcIlxuXG4gIH1cbiAgXG5dXG59XG4iXX0=