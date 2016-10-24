import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {SearchService} from './search.service';
import {FindFlightService} from './find-flight.service';

import { AppComponent } from './app.component';
import { SearchPodComponent } from './search-pod/search-pod.component';
import { FlightGridComponent } from './flight-grid/flight-grid.component';
import { FlightTileComponent } from './flight-tile/flight-tile.component';
import { SearchCriteriaDebugComponent } from './search-criteria-debug/search-criteria-debug.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchPodComponent,
    FlightGridComponent,
    FlightTileComponent,
    SearchCriteriaDebugComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SearchService, FindFlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
