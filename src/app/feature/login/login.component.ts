import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { UserService } from 'src/app/core/user/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData: any;
  pass: string;
  email: string;
  classMail: string = 'form-control';
  classPass: string = 'form-control';
  constructor(
    private ath: AuthService,
    private apiService: ApiService,
    private router: Router,
    private local: LocalerService,
    private userService: UserService
  ) { }

  doLogin(form) {

    let isSubmit = false;
    let currentUser: any;
    for (let i = 0; i < this.userData.length; i++) {

      if (form.value.email === this.userData[i].email && form.value.pass === this.userData[i].pass) {
        isSubmit = true;
        this.classMail = 'form-control is-valid'
        this.classPass = 'form-control is-valid'
        currentUser = this.userData[i]
        break;
      } else {
        this.classMail = 'form-control is-invalid';
        this.classPass = 'form-control is-invalid';
        isSubmit = false;
      }
    }
    if (isSubmit) {
      this.ath.changeSatusLogin(isSubmit);
      this.ath.changeUser(currentUser)

      this.local.saveLocalStorage({ currentUser: currentUser }, 'TOKEN')
      this.router.navigateByUrl('/')

    }
  }


  ngOnInit(): void {

    this.apiService.get(ENDPOINT.users, '').subscribe(e => {
      this.userData = e
    })
  }

}
