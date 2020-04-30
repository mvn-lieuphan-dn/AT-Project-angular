import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  data: any;

  constructor(
    private localer: LocalerService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.currentUser.subscribe(e => { this.data = e; }
    )
  }

}
