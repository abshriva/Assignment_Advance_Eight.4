import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/Employee';
import { EmployeeService } from '../services/employee-service';
import { EmployeeDropDownService } from '../services/employee-drop-dow.service';
import { EmployeeType } from '../models/Employee-type';



@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css'],
  providers:[EmployeeService,EmployeeDropDownService]

})
export class EmployeesComponent implements OnInit {

  employees: Employee[];
  empdetail:Employee;
  employee:Employee = new Employee();

  
  constructor(private employeService: EmployeeService) { }


  ngOnInit() {
    this.employees = this.employeService.getEmployees();
    
  }
}
