import { Component } from '@angular/core';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public zonesList: any;
  private interval: any;

  public actual: string;

  constructor(
    private timeService: TimeService
  ) { }

  ngOnInit(): void {
    this.setTime('Madrid, Spain');
  }

  setTime(city: string) {
    if(this.interval) {
      clearInterval(this.interval);
    }
    this.timeService.getTime(city).subscribe(
      (data: any) => {
        this.zonesList = data;
        //console.log(this.zonesList.datetime);
        this.interval = setInterval(() => {
          this.zonesList.datetime = new Date(this.zonesList.datetime).getTime() + 1000;
        }, 1000);
      }
    );
    const cityArray = city.toLowerCase().split(',');
    this.actual = cityArray[0];
  }

}
