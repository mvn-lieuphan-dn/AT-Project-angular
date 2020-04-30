import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tpcn',
  templateUrl: './tpcn.component.html',
  styleUrls: ['./tpcn.component.scss']
})
export class TpcnComponent implements OnInit {
  data: any;
  isLogin: boolean;
  constructor(
    private apiService: ApiService,
    private localer: LocalerService,
    private auth: AuthService,
    private route:Router
  ) { }
  getDetail(product) {
    this.localer.saveLocalStorage(product, 'DETAIL')
    this.route.navigateByUrl('/detail')
  }
  ngOnInit(): void {
    this.auth.currentStatus.subscribe(e => this.isLogin = e);
    this.apiService.get(ENDPOINT.products, '/?category=3').subscribe(e => {
      this.data = e;
    })
  }

}
