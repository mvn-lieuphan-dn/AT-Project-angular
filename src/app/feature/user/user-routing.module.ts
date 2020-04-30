import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './profile/profile.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ProfileCanDeactivate } from './profile/profile.candeactive';


const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {
        path: 'favorite',
        component: FavoriteComponent
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canDeactivate: [ProfileCanDeactivate],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
