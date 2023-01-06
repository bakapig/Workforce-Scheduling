import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ColDef, SideBarDef, GridReadyEvent, GridApi, CellClickedEvent } from 'ag-grid-community';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {}

  private gridApi!: GridApi;

  ngOnInit(): void {
  }

  columnDefs = [{ field: "make" }, { field: "model" }, { field: "price" }];

  rowData = [
    { make: "Toyota", model: "Celica", price: 35000 },
    { make: "Ford", model: "Mondeo", price: 32000 },
    { make: "Porsche", model: "Boxter", price: 72000 }
  ];

 public defaultColDef: any = {
   sortable: true,
   filter: true,
 };
 
 // Data that gets displayed in the grid
 public rowData$!: Observable<any[]>;

 // For accessing the Grid's API
 @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

 onGridReady(params: GridReadyEvent) {
  this.gridApi = params.api;
}

 // Example load data from sever
//  onGridReady(params: GridReadyEvent): void {
//   console.log('hi')
//   this.rowData$ = this.http
//     .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
// }

 // Example of consuming Grid Event
 onCellClicked( e: CellClickedEvent): void {
   console.log('cellClicked', e);
 }

 // Example using Grid's API
 clearSelection(): void {
   this.agGrid.api.deselectAll();
 }

 updateDB(): Observable<any[]> {
  console.log('You have pressed the button')
  return this.http.post<any[]>('http://localhost:5000/todo6', {
    "data": "wa piang eh"
})

 }

}
