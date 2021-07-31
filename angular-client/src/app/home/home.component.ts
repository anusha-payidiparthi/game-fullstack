import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GamesService } from '../services/games.service';
import { GlobalDataService } from '../services/global-data.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  gamesList = [{ name: '', _id: '', }];
  constructor(private gamesService: GamesService,
    private userService: UserService,
    private globalDataService: GlobalDataService,
    private router: Router) { }

  ngOnInit(): void {
    this.fetchGames();
  }

  fetchGames() {
    this.gamesService.fetchGames().subscribe((resp: any) => {
      this.gamesList = resp.data;
    });
  }

  playGame(game: any) {
    // const UserData = JSON.parse(this.globalDataService.get('user_data'));
    // const obj = {
    //   _id: UserData.user_id,
    //   games: UserData.games.push(game)
    // }
    // this.userService.updateUser(obj).subscribe((resp: any) => {
    //   console.log('***************', resp);
    // });
    this.router.navigate(['/game'])

  }
}
