import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { FavoriteComponent } from './favorite/favorite.component';


@NgModule({
  declarations: [FavoriteComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
