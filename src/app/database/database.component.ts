import { Component, OnInit } from '@angular/core';
import { ColDef, SideBarDef, GridReadyEvent, GridApi } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { SchedulerService } from '../scheduler.service';
import { map } from 'rxjs';




@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {

  constructor(private DataService: SchedulerService) { }

  private gridApi!: GridApi;
  public rowData: any;
  public output: any;

  columnDefs: ColDef[] = [
    { field: 'Employee_ID', headerName: 'ID'},
    { field: 'First_Name', headerName: 'First Name' },
    { field: 'Last_Name', headerName: 'Last Name'},
    { field: 'Hourly_Rate', headerName: 'Hourly Rate'},
    { field: 'Total_Hours_per_day', headerName: 'Office Hours'},
    { field: 'Competency'},
    { field: 'Craft'},
    { field: 'Availability'},
];

  // getEmployee() {
  //    return this.DataService.getEmployeeFromDB().subscribe((data) => {
  //     this.rowData = data
  //     console.log(this.rowData)
      
  //   }
  //     )
    
  // }

  getEmployee() {
    return this.DataService.getEmployeeFromDB().pipe(map((data) => {
     this.rowData = data
     console.log(this.rowData)
     
   }
     )
    )
   
 }

  
  onBtnTest() {
    console.log(this.gridApi.getColumnDefs())
  }

  onBtnExport() {
    this.gridApi.exportDataAsCsv();

  }

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
  }


  ngOnInit(): void {
    this.output = this.getEmployee().subscribe((data) => this.rowData = data)
          
    console.log(this.rowData)
  }

  
 
}
