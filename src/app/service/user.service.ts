import { HttpClient } from '@angular/common/http';
import { temporaryAllocator } from '@angular/compiler/src/render3/view/util';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../entites/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = environment.url + '/users';

  constructor(private http: HttpClient) {}

  getUser(username: string) {
    return this.http.get<User>(`${this.baseUrl}/${username}`);
  }

  getUsers() {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }
  deleatUsername: string;
  deleteuser(user: User) {
    this.deleatUsername = user.username!;
    console.log(this.deleatUsername);
    return this.http.delete(`${this.baseUrl}/${this.deleatUsername}`);
  }
  updateuser(user: User) {
    return this.http.put(`${this.baseUrl}`, user);
  }
  addUser(user: User) {
    return this.http.post(`${this.baseUrl}`, user);
  }
}
