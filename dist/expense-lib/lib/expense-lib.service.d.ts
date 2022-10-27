import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class ExpenseLibService {
    private http;
    constructor(http: HttpClient);
    that: this;
    getData(): any;
    getDataWithPaging(dtParams: any): any;
    expenseData: {
        requestedby: string;
        datetime: string;
        traveller: string;
        costcenter: string;
        client: string;
        travelcost: number;
        hotelcost: number;
        country: string;
    }[];
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpenseLibService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ExpenseLibService>;
}
