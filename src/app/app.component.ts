import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

import { testingWeatherData } from 'src/testingWeatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cityName: string = 'Moscow';
  wrongCityName: boolean = true;
  weatherData!: WeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.cityName);
    if (this.cityName.toLowerCase() === testingWeatherData.name.toLowerCase()) {
      this.wrongCityName = false;
      this.weatherData = testingWeatherData;
    } else {
      this.wrongCityName = true;
    }
  }

  // onSubmit() {
  //   this.getWeatherData(this.cityName);
  //   this.cityName = '';
  // }

  // ngOnInit(): void {
  //   this.getWeatherData(this.cityName);
  // }

  // private getWeatherData(cityName: string) {
  //   this.weatherService.getWeatherData(cityName).subscribe({
  //     next: (response) => {
  //       this.weatherData = response;
  //     },
  //   });
  // }
}
