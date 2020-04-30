import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  id: number
  data: any;
  isLogin: boolean;
  ctg: string;
  category: any;
  email = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').email : false
  curentFa: any
  constructor(
    private local: LocalerService,
    private auth: AuthService,
    private apiService: ApiService,
    private localer: LocalerService,
    private route: Router
  ) { }
  getDetail(product) {
    this.localer.saveLocalStorage(product, 'DETAIL')
    this.route.navigateByUrl('detail')
  }
  checkFa() {
    if (this.email) {
      this.apiService.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {
        this.curentFa = e[0].favorite
        for (let j = 0; j < this.curentFa.length; j++) {
          if (this.data.id === this.curentFa[j].id) {
            this.curentFa[j].state = true;
            this.data = this.curentFa[j]
          }
        }
      });
    }
  }
  ngOnInit(): void {
    this.data = this.local.getLocalStorage('DETAIL');
    this.checkFa();
    this.auth.currentStatus.subscribe(e => {
      this.isLogin = e;
    })

    this.apiService.get(ENDPOINT.products, '/?category=' + this.data.category + '&_limit=4').subscribe(e => {
      this.category = e
    });

    if (this.data.category == 1) {
      this.ctg = 'Thuốc kê đơn'
    } else if (this.data.category == 2) {
      this.ctg = 'Thuốc không kê đơn'
    } else {
      this.ctg = 'Thực phẩm chức năng'
    }
  }
}
