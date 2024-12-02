import { Component } from '@angular/core';
import { FormArray, FormControl, FormControlName, FormGroup } from '@angular/forms';
import { AllEmployeesService } from '../all-employees.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent {
  constructor(private _employeesservice:AllEmployeesService){}
  public employeesForm:FormGroup = new FormGroup(
    {
      name: new FormControl(),
      gender: new FormControl(),
      company: new FormControl(),
      role: new FormControl(),
      package: new FormControl(),
      email: new FormControl(),
      dob: new FormControl(),
      address: new FormGroup({
        addressLine: new FormControl(),
        city: new FormControl(),
        state: new FormControl(),
        pincode: new FormControl(),
      }),
      hikes:new FormArray([]),
      workMode: new FormControl(),
      wifibill: new FormControl(),
      travelBill: new FormControl(),     
      // cards: new FormArray([]),
    },
  )
  get addressFormArray(){
    return this.employeesForm.get('address') as FormArray 
  }

  get hikesFormArray(){
   return this.employeesForm.get('hikes') as FormArray;
  }

  submit(){
    console.log(this.employeesForm);
    this._employeesservice.createEmployees(this.employeesForm.value).subscribe(
    (data:any)=>{
      alert("created successfully");
    },
    (err:any)=>{
      alert("creating failed");
    })
  }

  // addaddress(){
  //   this.addressFormArray.push(
  //     new FormGroup({
  //       addressLine: new FormControl(),
  //       city: new FormControl(),
  //       state: new FormControl(),
  //       pincode:new FormControl(),
  //     })
  //   )
  // }
  addhike(){
       this.hikesFormArray.push(
      new FormGroup({
        year: new FormControl(),
        percentage: new FormControl(),
      })
    )
  }
  deletecard(i:number){
    this.addressFormArray.removeAt(i);
  }
  deleteCard(i:number){
    this.hikesFormArray.removeAt(i);
  }
}
