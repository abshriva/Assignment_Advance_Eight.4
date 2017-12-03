
import { Component, OnInit,Input } from '@angular/core';
import { Employee } from '../models/Employee';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
  
})
export class EmployeeDetailComponent implements OnInit {


  //@Input() employee;
  @Input() empdetail;
  
  employeeList: Employee;
  
  
  constructor() { }

  ngOnInit() {
    
  }

}
