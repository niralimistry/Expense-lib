import { NgModule } from '@angular/core';
import { ExpenseLibComponent } from './expense-lib.component';
// import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from '@angular/common'

@NgModule({
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
})
export class ExpenseLibModule { }
