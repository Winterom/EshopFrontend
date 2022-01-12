import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class PropertiesService {
  API_URL = 'http://localhost:8189/app/api/v1/';
  AUTH_API = 'http://localhost:8189/app/api/v1/auth/';
  constructor() { }
}
