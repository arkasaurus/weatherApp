import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { myService } from '../myService.service';

@Component({
  selector: 'app-week-view',
  templateUrl: './week-view.component.html',
  styleUrls: ['./week-view.component.css']
})
export class WeekViewComponent implements OnInit {
  
  constructor(private service : myService) { }
  outputText = {
    value : 'string'
  }
  weatherData
  ngOnInit() {
    this.service.getWeatherData().subscribe(



      (observableData) => {
        // console.log(observableData)
        this.weatherData = observableData
        }
      )




      
    
    
    }


    printForecast(forecast){
      return JSON.stringify(forecast)
  }
  

}
