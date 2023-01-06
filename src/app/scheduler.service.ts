import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private http: HttpClient) { 
    console.log('API gateway is initialized.')
  }

  public getEmployeeFromDB(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:5000/employee')
  }
}
