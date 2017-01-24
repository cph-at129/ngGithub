import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/Rx';

@Injectable()
export class GithubService {

  private GITHUB_API_USERS_URL = 'http://api.github.com/users/';
  private CLIENT_ID = '63f965c55115a7a7c4f6';
  private CLIENT_SECRET = 'c322dbd843bc388f3eb91bac8da96161ec192819';
  private QUERY_STRING = '?client_id=' + this.CLIENT_ID + '&client_secret=' + this.CLIENT_SECRET;
  private username: string;

  constructor(private http: Http) {
    this.username = 'cph-at129';
  }

  getUser(): Observable<any> {
    return this.http.get(this.GITHUB_API_USERS_URL + this.username + this.QUERY_STRING)
      .map(response => response.json())
  }

  getRepos(): Observable<any> {
    return this.http.get(this.GITHUB_API_USERS_URL + this.username + '/repos' + this.QUERY_STRING)
      .map(response => response.json())
  }

  searchUser(searchUsername: string) {
    this.username = searchUsername;
  }

}
