import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {environment} from './environments/environment'


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseURL = environment.apiURL;
  constructor( private http: HttpClient) { }

  getUserList() {
    return this.http.get(this.baseURL + "/users");
  }
}
