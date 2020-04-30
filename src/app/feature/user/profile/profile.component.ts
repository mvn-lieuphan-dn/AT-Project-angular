import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  isTyping = false;
  show: boolean = false;
  statePass: string = 'password';
  icon: string;
  data: any;
  constructor(
    private apiService: ApiService,
    private localer: LocalerService,
    private auth: AuthService
  ) { }

  email = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.email : false

  ngOnInit(): void {
    this.apiService.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {
      this.data = e[0]
    });
  }

  editProfile(form) {
    let newData = {
      ...this.data
    }
    if (form.value.pass) {
      newData.pass = form.value.pass
      newData.rePass = form.value.pass
    }
    if (form.value.fullName) {
      newData.fullName = form.value.fullName;

    }
    let dialog = confirm('Bạn có muốn thay đổi thông tin cá nhân không?')
    if (dialog) {
      this.localer.saveLocalStorage({ currentUser: newData }, 'TOKEN');
      this.auth.changeUser(newData);
      this.data = newData;
      this.apiService.put(ENDPOINT.users + '/' + this.data.id, newData)
      this.isTyping = false;
    }

  }

  showPass() {
    this.show = !this.show
    if (this.show) {
      this.statePass = 'text';
    } else {
      this.statePass = 'password';
    }
  }

  checkType() {
    this.isTyping = true;
  }
}
