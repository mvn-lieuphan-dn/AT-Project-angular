import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  news = {
    tittle: 'Thiên đường ẩm thực và góc check-in siêu xịn',
    content: `Nằm trên trục đường trung tâm 2/9, vị trí đắc địa, sầm uất,
     chợ đêm Helio Center là một địa điểm đầy thú vị mà du khách nhất định phải 
     bổ sung trong hành trình du hí đêm Đà Nẵng của mình. Không chỉ được mệnh danh
      là thiên đường ẩm thực về đêm vừa ngon vừa rẻ, nơi đây còn thu hút nhờ phim 
      trường check-in
     xinh xẻo, phân khu bia và nướng độc đáo, lễ hội mùa hè náo nhiệt hằng đêm.`,
    author: 'Hoa Ha',
    date: '12:04 25/04/2020',
    img: 'assets/anything/heloo.PNG',
    link: ''
  };
  customer = {
    name: 'Obama',
    avatar: 'assets/anything/obama.PNG',
    comment: 'Tổng thống ăn 2 suất bún chả, uống 2 chai bia và còn mua 4 suất mang về. Nguồn: Instagram Pete Souza.',
    date: '25/04/2018'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
