import { Directive, Input, HostListener } from '@angular/core';
import { LocalerService } from '../service/localer/localer.service';
import { UserService } from '../user/user.service';
import { ApiService, ENDPOINT } from '../service/api/api.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appFavorite]'
})
export class FavoriteDirective {
  @Input() node: any;//get value of data object when click 
  email = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.email : false
  dataUser: any;
  constructor(
    private localer: LocalerService,
    private user: UserService,
    private api: ApiService,
    private route: Router
  ) { }

  @HostListener('click', ['$event.target'])
  onClick(element: any) {
    
    if (this.email) {
      
      if (element.nodeName === 'I') {//get Element I has clicked

        this.api.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {

          this.dataUser = e;

          let index = this.user.findIndex(this.dataUser[0].favorite, this.node);
          // let index = this.dataUser[0].favorite.findIndex(element => element.id === this.node.id);
          this.node.state = !this.node.state;

          if (this.node.state === true) {
            //style color when click
            if (index == -1) {
              this.dataUser[0].favorite.push(this.node)
              this.api.put(ENDPOINT.users + '/' + this.dataUser[0].id, this.dataUser[0])
            }
          }

          else {
            this.dataUser[0].favorite.splice(index, 1)
            this.api.put(ENDPOINT.users + '/' + this.dataUser[0].id, this.dataUser[0])

          }
        });
      }
    } else {
      let retVal = confirm('Vui lòng đăng nhập để thực hiện chức năng này!');
      if (retVal) {
        this.route.navigateByUrl('/login')
      }
    }
  }
}
