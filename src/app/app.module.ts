import { NgModule } from '@angular/core';
import { Module} from 'ag-grid-community';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TopnavComponent } from './topnav/topnav.component';
import { HomeComponent } from './home/home.component';
import { DatabaseComponent } from './database/database.component';
import { HttpClientModule } from '@angular/common/http';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { FiltersToolPanelModule } from '@ag-grid-enterprise/filter-tool-panel';
import { ChartComponent } from './chart/chart.component';
import { AgGridModule } from 'ag-grid-angular';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { ModuleRegistry } from '@ag-grid-community/core';
import { CsvExportModule } from '@ag-grid-community/csv-export';


ModuleRegistry.registerModules([ClientSideRowModelModule, CsvExportModule]);

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TopnavComponent,
    HomeComponent,
    DatabaseComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
 

}
