import { Component } from '@angular/core';
import { AllEmployeesService } from '../all-employees.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent {
  employees:any=[];
  term:string='';
  column:string='';
  order:string='';
  limit:number=0;
  page:number=0;
  constructor(private _employeesService:AllEmployeesService){
   _employeesService.getEmployees().subscribe(
      (data:any)=>{
        this.employees=data;
        console.log(this.employees)
      },
      (err:any)=>{
        alert('Internal server error');
      }
    )
  }
  filter(){
    this._employeesService.getFilteredEmployees(this.term).subscribe(
      (data:any)=>{
        this.employees=data;
      },
      (err:any)=>{
        alert('Internal server error');
      })
}
pagination(){
  this._employeesService.getPagedEmployees(this.limit, this.page).subscribe(
    (data:any)=>{
      this.employees=data;
    },
    (err:any)=>{
      alert('Internal server error');
    })
  }
sort(){
  this._employeesService.getSortedEmployees(this.column, this.order).subscribe(
    (data:any)=>{
      this.employees=data;
    },
    (err:any)=>{
      alert('Internal server error');
    })
}
 
delete(id:string){
this._employeesService.deleteEmployees(id).subscribe(
  (data:any)=>{
    alert("deleted successfully");
    location.reload();
  },
  (err:any)=>{
    alert('Internal server error');
  }
)
}
}
