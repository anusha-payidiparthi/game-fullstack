import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GamesService {
    private baseURL = 'http://localhost:3500/games/';
    private gamesURL = this.baseURL + 'fetchGames';


    constructor(
        private http: HttpClient) { }


    fetchGames() {
        return this.http.get(this.gamesURL);
    }

}