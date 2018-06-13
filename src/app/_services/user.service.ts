import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from '../_models/index';
import 'rxjs/add/operator/map';
import { AuthService } from './auth.service';

@Injectable()
export class UserService {
  constructor(private http: Http, private authService: AuthService) { }
  /* CRUD and User endpoint Calls */
  /* Read User by id*/
  // TODO: how do I get a user by id?
  /* Update User by id */
  getUser() {
    return this.http.get(this.authService.getUserUrl(), this.authService.getBetterHeaders())
      .map((response: Response) => response.json());
  }
  registerUser(user: User) {
    return this.http.post(this.authService.getRegUserUrl(), user, this.authService.getBetterHeaders())
      .map((response: Response) => response.json());
  }
  updateUser() {
    return this.http.post(this.authService.updateUserUrl(), this.authService.getBetterHeaders())
      .map((response: Response) => response.json());
  }
}
