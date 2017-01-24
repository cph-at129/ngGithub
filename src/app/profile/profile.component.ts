import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/Rx';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private user: any;
  private repos: any;
  private searchUsername: string;

  constructor(private githubService: GithubService) {
  }

  ngOnInit() {
    this.getUser();
    this.getRepos();
  }

  searchUser() {
    this.githubService.searchUser(this.searchUsername);
    this.getUser();
    this.getRepos();
  }

  getUser() {
    this.githubService
      .getUser()
      .subscribe(user => {
        console.log(user);
        this.user = user;
      })
  }

  getRepos() {
    this.githubService
      .getRepos()
      .subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      })
  }

}
