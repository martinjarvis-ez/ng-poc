import { Component } from '@angular/core';
import {FlightType} from './flight-type.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  flightType = FlightType;

}
