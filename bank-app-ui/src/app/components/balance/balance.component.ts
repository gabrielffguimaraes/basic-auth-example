import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user.model';
import { DashboardService } from '../../services/dashboard/dashboard.service';


@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  user = new User();
  transactions = new Array();

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    if(localStorage.getItem('userdetails') != null) {
      this.user = JSON.parse(localStorage.getItem('userdetails') || "");
      if(this.user){
        this.dashboardService.getAccountTransactions(this.user.id).subscribe(
          responseData => {
          this.transactions = <any> responseData;
          });
      }
    }
  }

}
