import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllEmployeesService {

  constructor(private _httpClient:HttpClient) { }
  getEmployees():Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees');
  }

  deleteEmployees(id:string):Observable<any>{
    return this._httpClient.delete('https://6572df5d192318b7db412dfe.mockapi.io/employees/'+id);
  }

  createEmployees(data:any):Observable<any>{
    return this._httpClient.post('https://6572df5d192318b7db412dfe.mockapi.io/employees/',data);
  }
  getPagedEmployees(limit:number,page:number):Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?limit='+limit+"&page="+page);
  }

  getFilteredEmployees(term:string):Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?filter='+term);
  }

  getSortedEmployees(column:string,order:string):Observable<any>{
    return this._httpClient.get('https://6572df5d192318b7db412dfe.mockapi.io/employees?sortBy='+column+"&order="+order);
  }
}
