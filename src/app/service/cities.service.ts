import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cities } from '../model/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor(private http: HttpClient) { 
    this.getJSON().subscribe(data => {
      console.log(data);
  },
  err => console.error(err),
  () => console.log('Wiki Items Geladen'));
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/cities.json");

  }
}
