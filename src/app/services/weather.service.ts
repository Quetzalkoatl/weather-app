import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeatherData(cityName: string) {
    return this.http.get<WeatherData>(
      environment.weatherApiBaseUrl + cityName.toLowerCase(),
      {
        headers: new HttpHeaders()
          .set(environment.XRapidApiHostName, environment.XRapidApiHostValue)
          .set(environment.XRapidApiKeyName, environment.XRapidApiKeyValue),
        params: new HttpParams().set('mode', 'json'),
      }
    );
  }
}
