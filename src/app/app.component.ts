import { Component, OnInit } from '@angular/core';
import { Cities } from './model/cities';
import { CitiesService } from './service/cities.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'FetchJsonWithRestApi';

  constructor( private cityService: CitiesService){}

  tableHeaderProperties = ["name",
  "native name",
  "country",
  "continent",
  "latitude",
  "longitude",
  "population",
  "founded",
  "landmarks"];

  columns = ["name",
  "name_native",
  "country",
  "continent",
  "latitude",
  "longitude",
  "population",
  "founded",
  "landmarks"];
  
  cities: Cities[] = [];

  ngOnInit(): void {
      this.cityService.getJSON().subscribe((data) =>{
        this.cities = data;
      }, (error) => {console.log(error)})
  }

}
