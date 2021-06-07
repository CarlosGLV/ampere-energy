import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TimeService {

  //public endpoint: string = 'https://timezone.abstractapi.com/v1/current_time/?api_key=4df7f83991a840ce88ed312cedf381a0&location=Oxford,%20United%20Kingdom';
  public endpoint: string = 'https://timezone.abstractapi.com/v1/current_time/';

  constructor(
    private http: HttpClient
  ) { }

  getTime(city: string) {
    const params: any = {
      api_key: '4df7f83991a840ce88ed312cedf381a0'
    }
    return this.http.get(this.endpoint + '?api_key=' + params.api_key + '&location=' + city);
  }
  
}