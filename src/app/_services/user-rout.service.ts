import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PropertiesService} from "./properties.service";


@Injectable({
  providedIn: 'root'
})
export class UserRoutService {
  constructor(private http: HttpClient, private properties: PropertiesService) {

  }

  getPublicContent(): Observable<any> {
    return this.http.get(this.properties.API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(this.properties.API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(this.properties.API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(this.properties.API_URL + 'admin', { responseType: 'text' });
  }
}
