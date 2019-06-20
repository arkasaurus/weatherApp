import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable ()

export class myService {
    
    constructor (private http: HttpClient){

    }

    jsonUrl = 'assets/weatherData.json'
     
    getWeatherData (){
        return this.http.get(this.jsonUrl)
    }
    
    
}