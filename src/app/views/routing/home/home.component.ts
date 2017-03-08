import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Routes';
  submenu = [{
    name: 'Guards',
    path: 'guards'
  }, {
    name: 'Form-links',
    path: 'params'
  }, {
    name: 'Users',
    path: 'user'
  }];

  constructor() { }

  ngOnInit() {
  }

}
