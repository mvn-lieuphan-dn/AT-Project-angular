import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
interface product {
  id: number;
  name: string;
  inventory: number;
  img: string;
  description: string;
  category: number;
  price: number;
  state: boolean
}
@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})

export class FavoriteComponent implements OnInit {
  data: product[];
  constructor(
    private localer: LocalerService,
    private auth: AuthService,
  ) { }
 
  ngOnInit(): void {
    this.auth.currentUser.subscribe(e => {
      this.data = e.favorite    
    })
  }


}
