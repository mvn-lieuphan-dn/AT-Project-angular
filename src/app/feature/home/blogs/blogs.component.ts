import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  news = {
    tittle: 'Thứ trưởng Bộ Y tế lý giải nguyên nhân 5 ca dương tính trở lại',
    content: 'Thứ trưởng Bộ Y tế nêu 3 vấn đề với những ca tái dương tính SARS-CoV-2, trong đó có trường hợp dự đoán kháng thể không thể tiêu diệt được virus, virus sẽ tồn tại rất lâu.',
    author: 'Hoài Thu',
    date: '12:04 25/04/2020',
    img: 'assets/anything/news.jpg',
    link: 'https://zingnews.vn/thu-truong-bo-y-te-ly-giai-nguyen-nhan-5-ca-duong-tinh-tro-lai-post1076026.html'
  };
  customer = {
    name: 'Taylor Swift',
    avatar: 'assets/anything/customer.jpg',
    comment: 'I think your products very good, healthy and balance',
    date: '25/04/2020'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
