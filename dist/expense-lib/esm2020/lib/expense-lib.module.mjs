import { NgModule } from '@angular/core';
import { ExpenseLibComponent } from './expense-lib.component';
// import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
export class ExpenseLibModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhwZW5zZS1saWIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvZXhwZW5zZS1saWIvc3JjL2xpYi9leHBlbnNlLWxpYi5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxnRkFBZ0Y7QUFDaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFBOztBQWlCOUMsTUFBTSxPQUFPLGdCQUFnQjs7NkdBQWhCLGdCQUFnQjs4R0FBaEIsZ0JBQWdCLGlCQWJ6QixtQkFBbUIsYUFJbkIsZ0JBQWdCO1FBQ2hCLFlBQVksYUFJWixtQkFBbUI7OEdBSVYsZ0JBQWdCLFlBVHpCLGdCQUFnQjtRQUNoQixZQUFZOzJGQVFILGdCQUFnQjtrQkFmNUIsUUFBUTttQkFBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osbUJBQW1CO3dCQUNuQix1QkFBdUI7cUJBQ3hCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFlBQVk7cUJBRWI7b0JBQ0QsT0FBTyxFQUFFO3dCQUNQLG1CQUFtQjt3QkFDbkIsdUJBQXVCO3FCQUN4QjtpQkFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFeHBlbnNlTGliQ29tcG9uZW50IH0gZnJvbSAnLi9leHBlbnNlLWxpYi5jb21wb25lbnQnO1xuLy8gaW1wb3J0IHsgRXhwZW5zZUZvcm1Db21wb25lbnQgfSBmcm9tICcuL2V4cGVuc2UtZm9ybS9leHBlbnNlLWZvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IERhdGFUYWJsZXNNb2R1bGUgfSBmcm9tIFwiYW5ndWxhci1kYXRhdGFibGVzXCI7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nXG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEV4cGVuc2VMaWJDb21wb25lbnQsXG4gICAgLy8gRXhwZW5zZUZvcm1Db21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIERhdGFUYWJsZXNNb2R1bGUsXG4gICAgQ29tbW9uTW9kdWxlXG5cbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIEV4cGVuc2VMaWJDb21wb25lbnQsXG4gICAgLy8gRXhwZW5zZUZvcm1Db21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeHBlbnNlTGliTW9kdWxlIHsgfVxuIl19