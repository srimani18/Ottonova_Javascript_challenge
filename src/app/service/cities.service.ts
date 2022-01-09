import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cities } from '../model/cities';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  url = '../../assets/cities.json';
      city: Cities[] = [];
     constructor(protected http: HttpClient) {
     }

        getCitiesList() {
          return this.http.get(this.url)
            .pipe(map((data: any) => {return this.city = data;
                }), catchError(error => {
                return throwError('Its a Trap!')
              })
            );
        }
  
}
