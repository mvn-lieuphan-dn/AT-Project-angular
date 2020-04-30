import { Component, OnInit } from '@angular/core';
import { ApiService, ENDPOINT } from 'src/app/core/service/api/api.service';
import { AuthService } from 'src/app/core/service/auth/auth.service';
import { LocalerService } from 'src/app/core/service/localer/localer.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	tkd: any;
	tkkd: any;
	tpcn: any;
	isLogin: boolean;
	constructor(
		private apiService: ApiService,
		private localer: LocalerService,
		private auth: AuthService,
		private route: Router
	) { }

	email = this.localer.getLocalStorage('TOKEN') ? this.localer.getLocalStorage('TOKEN').currentUser.email : false

	curentFa: any

	checkFa(array, category) {

		this.apiService.get(ENDPOINT.users, '?email=' + this.email).subscribe(e => {
			this.curentFa = e[0].favorite
			for (let i = 0; i < array.length; i++) {


				for (let j = 0; j < this.curentFa.length; j++) {
					if (array[i].id === this.curentFa[j].id) {
						array[i].state = true;
						if (category == 1) {
							this.tkd = array
						} else if (category == 2) {
							this.tkkd = array
						} else {
							this.tpcn = array
						}
					}
				}
			}
		});
	}

	getDetail(product) {
		this.localer.saveLocalStorage(product, 'DETAIL')
		this.route.navigateByUrl('/detail')
	}
	ngOnChanges() {

	}
	ngOnInit(): void {
		this.auth.currentStatus.subscribe(e => this.isLogin = e);
		this.apiService.get(ENDPOINT.products, '/?category=1&_limit=4').subscribe(e => {
			this.tkd = e;		
			if (this.email) {
				this.checkFa(e, 1)
			}
		});
		this.apiService.get(ENDPOINT.products, '/?category=2&_limit=4').subscribe(e => {
			this.tkkd = e
			if (this.email) {
				this.checkFa(e, 2)
			}
		});
		this.apiService.get(ENDPOINT.products, '/?category=3&_limit=4').subscribe(e => {
			this.tpcn = e
			if (this.email) {
				this.checkFa(e, 3)
			}
		});

	}
}

