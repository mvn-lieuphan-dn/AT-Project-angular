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
    "name": "Ba Na Hills",
    "img": "assets/anything/dl2.jpg",
    "price": 165,
    "inventory": 69,
    "description": `Là địa điểm du lịch mà bất cứ ai đến du 
    lịch Đà Nẵng cũng đi ít nhất 1 lần. Tọa lạc trên đỉnh núi 
    cao vời vợi Bà Nà hút hồn du khách với cảnh đẹp như tiên cảnh 
    và cáp treo dài nhất thế giới. Đây cũng được xem là một trong
     những địa điểm nổi bật nhất Đà Nẵng. <br>
     >> Trong những năm gần đây lượng khách du lịch đến Bà Nà tăng 
     đột biến. Để thuận tiện nhất mọi người nên đặt Tour Bà Nà Hill 
     1 ngày vừa tiết kiệm, thoải mái và dễ dàng tham quan.
     `,
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
