import { Injectable } from '@angular/core';
import { Employee } from '../models/Employee';
//import { EmployeeType } from '../models/Employee-type';
import { LoggerService } from './logger-service';

@Injectable()
export class EmployeeService{

    emp:Employee[] =[];
     
    constructor(private loggerservice: LoggerService){
      
            }

      getEmployees(): Employee[]
      { 

      //Log Eemployeee list retrieved successfully!
      this.loggerservice.log('EmployeeService.getEmployees()=> Employee list retrieved successfully!')
      return this.emp;
      }
        
      createEmployee(newEmp: Employee)
      {
      this.emp.unshift(newEmp);
      this.loggerservice.log('EmployeeService.createEmployee() =>New employee created successfully');
      //accessing loggerservice intanse provided by Angular Framework
      }
        
}