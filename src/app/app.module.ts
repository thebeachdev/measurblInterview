import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TableComponent } from './table/table.component';
import { TableService } from './_services/table.service';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    HttpClientModule,
    Ng2SmartTableModule,
    NgbModule.forRoot(),
    BrowserModule
  ],
  providers: [
    TableService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
