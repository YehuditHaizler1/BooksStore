import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class CanActivateIfNotLogin implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         if (!localStorage.getItem('user')) {
             return true;
         }
        this.router.navigate(['/BooksStore/account']);
        return false;
    }
};

@Injectable({ providedIn: 'root' })
export class CanActivateIfLogin implements CanActivate {
    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         if (localStorage.getItem('user')) {
             return true;
         }
        this.router.navigate(['/BooksStore/home']);
        return false;
    }
    
}