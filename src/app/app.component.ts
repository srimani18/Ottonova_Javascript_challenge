import { Component, OnInit } from '@angular/core';
import { Cities } from './model/cities';
import { CitiesService } from './service/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 cities: Cities[] = [];

 tableHeaders = ["name",
  "native name",
  "country",
  "continent",
  "latitude",
  "longitude",
  "population",
  "founded",
  "landmarks"];

  constructor( private cityService: CitiesService){
  }

  ngOnInit() {
    this.getCityData();
  }
  getCityData() {
    this.cityService.getCitiesList().subscribe(data=>{
      this.cities = data.cities;
      //console.log(this.cities);
      this.cities.forEach(a => a.name = a.name);
    })
  }
  
}