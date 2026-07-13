import { NgModule } from "@angular/core";
import { EmployeesComponent } from './employees.component';
import { EmployeesRoutingModule } from './employees-routing.module';
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [
        CommonModule,
        EmployeesRoutingModule
    ],
    declarations : [
        EmployeesComponent
    ]
})
export class EmployeeModule {}