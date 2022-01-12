import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PropertiesService} from "./properties.service";


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private properties: PropertiesService) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post(this.properties.AUTH_API, {
      username,
      password
    }, httpOptions);
  }

    register(username: string, email: string, password: string, fullname: string): Observable<any> {
    return this.http.post(this.properties.AUTH_API + 'register', {
      username,
      fullname,
      email,
      password
    }, httpOptions);
  }
}
