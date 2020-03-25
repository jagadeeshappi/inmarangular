import { Component } from '@angular/core';

import {LOCATIONS, DEPARTMENTS} from './locations';
import { RestServiceService } from './rest-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WELCOME TO SKU DATA !!!';
  locations : LOCATIONS;
  departments  : DEPARTMENTS;
  locationFlag  = true;
  departmentFlag  = true;

  constructor(private restService : RestServiceService) { }

  getLocations(){
    this.locationFlag = false;
    this.restService.getLocationsData().subscribe(data => {
      this.locations  = JSON.parse(JSON.stringify(data));
    });
  }

  getDepartments(locid){
    this.departmentFlag=false;
    this.restService.getDepartmentsData(locid).subscribe(data => {
      this.departments  = JSON.parse(JSON.stringify(data));
      console.log(this.departments);
    });
  }

}
