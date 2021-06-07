import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public countUp: any = '00:00:00';
  
  private seconds: any = '00';
  private minutes: any = '00';
  private hours: any = '00';

  private interval: any;

  constructor() { }

  ngOnInit(): void {

  }

  startCount() {
    this.interval = setInterval(() => {
      
      Number(this.seconds++);
      if (this.seconds < 10) {
        this.seconds = '0' + this.seconds;
      }
      if(this.seconds === 59) {
        Number(this.minutes++);
        this.seconds = 0;
        if (this.minutes < 10) {
          this.minutes = '0' + this.minutes;
        }
        if(this.minutes === 59) {
          Number(this.hours++);
          this.minutes = 0;
        }
      }
      
      this.countUp = this.hours + ':' + this.minutes + ':' + this.seconds;

    }, 1000);
  }


  pauseCount() {
    clearInterval(this.interval);
  }

  resetCount() {
    clearInterval(this.interval);
    this.minutes = '00';
    this.seconds = '00';
    this.hours = '00';

    this.countUp = this.hours + ':' + this.minutes + ':' + this.seconds;
    //this.startCount();
  }

}
