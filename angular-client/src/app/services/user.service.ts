import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Observable } from 'rxjs/internal/Observable';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    private baseURL = 'http://localhost:3500/api/';
    private signupURL = this.baseURL + 'signup';
    private loginURL = this.baseURL + 'login'
    private updateGames = this.baseURL + 'games-played'


    constructor(
        private http: HttpClient) { }


    userSignup(signupData: any) {
        return this.http.post(this.signupURL, signupData);
    }

    userLogin(loginData: any) {
        return this.http.post(this.loginURL, loginData);
    }

    updateUser(games: any) {
        return this.http.put(this.updateGames, games);
    }
}