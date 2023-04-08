import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user = new User();

  constructor() {

  }

  ngOnInit() {
    if(localStorage.getItem('userdetails')){
      this.user = JSON.parse(localStorage.getItem('userdetails') || "");
      console.log(this.user);
    }
  }

}
