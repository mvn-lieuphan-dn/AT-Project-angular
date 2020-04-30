import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from './core/service/auth/userguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./feature/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./feature/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./feature/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./feature/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./feature/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./feature/user/user.module').then(m => m.UserModule),
    canActivate: [UserGuard],
    canActivateChild: [UserGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
