import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from "../../../../node_modules/rxjs";

import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService {
    url: string = "https://still-crag-32940.herokuapp.com/api";
    usersList: User[] = [];
    u: User;
    subAnonymous = new Subject();
    constructor(private http: HttpClient, private router: Router) {
    }

    register(user: User) {
        user.profilePicture = "../../assets/Images/UserProfile.jpg";
        return this.http.post(this.url.concat('/register'), user).subscribe(res => {
            this.addUserToLocalStorage(user);
            this.router.navigate(["BooksStore/account/home"]);
        }
        ), err => {
        }
    }

    login(loginner: User) {
        this.http.post(this.url.concat('/login'), loginner).subscribe(
            res => {
                loginner = JSON.parse(JSON.stringify(res));
                console.log(loginner);
                this.addUserToLocalStorage(loginner);
                this.router.navigate(["BooksStore/account/home"]);

            },
            err => {
                this.router.navigate(["BooksStore/account/register"]);
            }
        )
    }

    addUserToLocalStorage(user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.subAnonymous.next(true);
    }

    deleteUserFromLocalStorage() {
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        this.subAnonymous.next(false);

    }
}



