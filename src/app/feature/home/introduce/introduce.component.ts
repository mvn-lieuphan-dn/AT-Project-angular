import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { Router } from '@angular/router';
// import {SimpleTimer} from 'ng2-simple-timer';
@Component({
  selector: 'app-introduce',
  templateUrl: './introduce.component.html',
  styleUrls: ['./introduce.component.scss']
})
export class IntroduceComponent implements OnInit {
  unShow = true;
  link: any
  ctg: string;
  data = {
    "id": 1,
    "name": "BIOTIN 5mg",
    "img": "assets/img/tkd/1.jpg",
    "price": 165,
    "inventory": 69,
    "description": "Viên uống Natrol Biotin 10.000 mcg bổ sung thành phần Biotin (còn gọi là vitamin H) - vốn được biết đến là là vitamin quan trọng cho tóc và móng. Natrol Biotin 10000 mcg không chứa phụ gia gây hại, không ảnh hưởng tới hệ tiêu hóa, thích hợp sử dụng cho cả nam và nữ.",
    "category": 1
  }
  constructor(
    private localer: LocalerService,
    private route: Router
  ) { }

  getDetail(product) {
    this.localer.saveLocalStorage(product, 'DETAIL')
    this.route.navigateByUrl('/detail')
  }
  ngOnInit(): void {
    if (this.data.category == 1) {
      this.ctg = 'Thuốc kê đơn'
    } else if (this.data.category == 2) {
      this.ctg = 'Thuốc không kê đơn'
    } else {
      this.ctg = 'Thực phẩm chức năng'
    }
  }
  showMore() {
    this.unShow = false
  }
  onDestroy() {
    this.unShow = true
  }
}
