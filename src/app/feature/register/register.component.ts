import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user/user.service';


@Component({ templateUrl: 'register.component.html' })
export class RegisterComponent implements OnInit {
  dataUser: any;
  rePass: string;
  pass: string;
  email: string;
  fullName: string;

  className: string = 'form-control';
  classMail: string = 'form-control';
  classPass: string = 'form-control';
  constructor(
    private api: ApiService,
    private route: Router,
    private userService: UserService
  ) {

  }


  ngOnInit() {
    this.api.get(ENDPOINT.users, '').subscribe(e => {
      this.dataUser = e;
    })
  }


  doRegister(form) {
    let validMail = false;
    let validPass = false;
    let validName = false;
    let currentUser = {
      id: this.dataUser.length + 1, ...form.value, favorite: []
    };
    if (form.value.fullName) {
      validName = true;
      this.className = 'form-control is-valid'
    } else {
      validName = false;
      this.className = 'form-control is-invalid';
    }

    if (this.userService.validateEmail(form.value.email) && !this.userService.checkMail(form.value.email, this.dataUser)) {
      validMail = true;
      this.classMail = 'form-control is-valid'
    } else {
      this.classMail = 'form-control is-invalid';
      validMail = false;
    }

    if (form.value.pass) {
      if (this.userService.checkPass(form.value.pass, form.value.rePass)) {
        validPass = true;
        this.classPass = 'form-control is-valid'
      }
      else {
        validPass = false;
        this.classPass = 'form-control is-invalid';
      }
    } else {
      validPass = false;
      this.classPass = 'form-control is-invalid'
    }

    if (validName && validPass && validMail) {
      this.api.post(ENDPOINT.users, currentUser);
      this.route.navigateByUrl('/login')
    }
  }
}
