/// <reference types="datatables.net" />
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ExpenseLibService } from "./expense-lib.service";
import * as i0 from "@angular/core";
export declare class ExpenseLibComponent implements OnInit {
    private http;
    private httpService;
    dtOptions: DataTables.Settings;
    dtTrigger: Subject<any>;
    policiesData: any;
    constructor(http: HttpClient, httpService: ExpenseLibService);
    ngOnInit(): void;
    expenseData: any;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExpenseLibComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ExpenseLibComponent, "lib-ExpenseLib", never, {}, {}, never, never, false>;
}
