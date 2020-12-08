import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {

  private daysArray = ['Sunday','Monday', 'Tuseday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  private date = new Date();

  public hour: any;
  public minute: number;
  public second: number;
  public ampm: string;
  public day: string;

  constructor() { }

  ngOnInit(){
    setInterval(() => {
      const date = new Date();
      this.day = this.daysArray[date.getDay()];
      this.hour = date.getHours();
      this.minute = date.getMinutes();
      this.second = date.getSeconds();
    }, 1000);
  }
}
