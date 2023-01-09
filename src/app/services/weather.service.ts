import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { IWeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  // getWeatherData(cityName: string) {
  //   return this.http.get<IWeatherData>(
  //     environment.weatherApiBaseUrl +
  //       environment.key +
  //       '&q=' +
  //       cityName.toLowerCase()
  //   );
  // }
}
