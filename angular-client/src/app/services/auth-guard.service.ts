import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { GlobalDataService } from './global-data.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(
        private router: Router, private globalDataService: GlobalDataService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const UserData = JSON.parse(this.globalDataService.get('user_data'));
        if (UserData && UserData.email && UserData.email.length > 0) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }

}