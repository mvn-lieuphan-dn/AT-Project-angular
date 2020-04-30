import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { ApiService } from 'src/app/core/service/api/api.service';
import { IntroduceComponent } from './introduce/introduce.component';
import { BlogsComponent } from './blogs/blogs.component';


@NgModule({
  declarations: [IntroduceComponent,BlogsComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  providers: [
    ApiService
  ],
  exports:[IntroduceComponent,BlogsComponent]
})
export class HomeModule { }
