import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileComponent } from './profile.component';

@Injectable()
export class ProfileCanDeactivate implements CanDeactivate<ProfileComponent> {

  constructor() { }

  canDeactivate(
    component: ProfileComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (component.isTyping) {
      console.log("ProfileCanDeactivate -> constructor -> component.isTyping", component.isTyping)
      return confirm('Your data will lose if you change page!')
    }
    return true;
  }
}
