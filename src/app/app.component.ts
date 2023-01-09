import { Component, OnInit } from '@angular/core';
import { IWeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

// import { fakeData } from 'fakeData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  cityName: string = 'Moscow';
  wrongCityName: boolean = true;
  weatherData!: IWeatherData;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    // this.weatherData = fakeData;
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
  }

  private getWeatherData(cityName: string) {
    this.weatherService.getWeatherData(cityName).subscribe({
      next: (response) => {
        if (
          response.location.name &&
          cityName.toLowerCase() === response.location.name.toLowerCase()
        ) {
          this.weatherData = response;
          this.wrongCityName = false;
        } else {
          this.wrongCityName = true;
        }
      },
      error: (error) => {
        this.wrongCityName = true;
        console.log(error);
      },
    });
  }
}
