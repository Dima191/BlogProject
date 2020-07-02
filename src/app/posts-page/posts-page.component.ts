import { Component, OnInit } from '@angular/core';

export interface Post {
  author: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css']
})
export class PostsPageComponent implements OnInit {

  author = '';
  title = '';
  text = '';

  view = false;
  posts: Post[] = [
    {author: 'Lorem', title: 'Angular', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe' +
      'rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre' +
      'henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat' +
      'at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
      '\n'},
    {author: 'Lorem', title: 'Angular', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe' +
        'rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre' +
        'henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat' +
        'at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
        '\n'},
    {author: 'Lorem', title: 'Angular', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe' +
        'rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre' +
        'henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat' +
        'at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
        '\n'},
    {author: 'Lorem', title: 'Angular', text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe' +
        'rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in repre' +
        'henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidat' +
        'at non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."\n' +
        '\n'}];

  constructor() { }

  ngOnInit(): void {
  }

  AddNewPost(){
    this.posts.push({author: this.author, title: this.title, text: this.text});
    this.author = '';
    this.title = '';
    this.text = '';
  }

}
