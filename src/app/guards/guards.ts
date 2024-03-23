import { ActivatedRouteSnapshot, CanActivateFn, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";

export const canActivateGuard:CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
      console.log("CanActivate Guard")
  return true;
}

export const canDeactivateGuard:CanDeactivateFn<any>= (component:any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) =>{
  return false;
}
