import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RestServiceService {

  constructor(private http  : HttpClient) { }

  getLocationsData(){
    return this.http.get("http://localhost:8080/SpringBootHibernateExample/api/v1/location");
  }

  getDepartmentsData(locid){
    return this.http.get("http://localhost:8080/SpringBootHibernateExample/api/v1/location/"+locid+"/department");
  }
}
