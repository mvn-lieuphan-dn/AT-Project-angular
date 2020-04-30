import { Component, OnInit } from '@angular/core';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLogged: boolean;
  constructor(
    private auth: AuthService,
    private router: Router,
    private local: LocalerService
  ) { }

  ngOnInit(): void {

    this.auth.currentStatus.subscribe(e => this.isLogged = e);
  }


  logOut() {
    this.isLogged = false;
    this.auth.changeSatusLogin(this.isLogged)
    this.local.delLocalStorage('TOKEN')
    this.router.navigateByUrl('/')
  }
}
