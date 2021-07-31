import { Component, OnInit } from '@angular/core';
import { GlobalDataService } from '../services/global-data.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  isStarted = false;
  constructor(private globalDataService: GlobalDataService, private dialog: MatDialog) { }

  userData: any = [];
  playerHealth = 100;
  dragonHealth = 100;
  dragonInterval: any = '';
  timeInterval: any = '';
  commentary = ['']
  ngOnInit(): void {
    this.userData = JSON.parse(this.globalDataService.get('user_data'));
  }

  start() {
    this.isStarted = true;

    this.timeInterval = setTimeout(() => {
      clearInterval(this.dragonInterval);
      if (this.playerHealth > this.dragonHealth) {
        this.openDialog({ name: 'You', message: '' });
      } else if (this.playerHealth < this.dragonHealth) {
        this.openDialog({ name: 'Dragon', message: '' });
      } else {
        this.openDialog({ message: 'Timeup !!', name: '' });
      }
    }, 60000);

    this.dragonInterval = setInterval(() => {
      const val = Math.floor(Math.random() * 10) + 1;
      this.playerHealth = this.playerHealth - val > 0 ? this.playerHealth - val : 0;
      this.commentary.push('Dragon attacked you by ' + val);

      if (this.playerHealth <= 0) {
        clearInterval(this.dragonInterval);
        this.openDialog({ name: 'Dragon', message: '' });
      }
    }, 1000);
  }

  attack() {
    const val = Math.floor(Math.random() * 10) + 1;
    this.dragonHealth = this.dragonHealth > 0 ? this.dragonHealth - val : 0;
    this.commentary.push('You attacked Dragon by ' + val);

    if (this.dragonHealth <= 0) {
      clearInterval(this.dragonInterval);
      this.openDialog({ name: 'You', message: '' });
    }
  }

  blast() {
    this.dragonHealth = (this.dragonHealth - 20) > 0 ? this.dragonHealth - 20 : 0;
    this.commentary.push('You Power attacked Dragon by ' + 20);
    if (this.dragonHealth <= 0) {
      clearInterval(this.dragonInterval);
      this.openDialog({ name: 'Dragon', message: '' });
    }
  }

  heal() {
    const val = Math.floor(Math.random() * 10) + 1;
    this.playerHealth = (this.playerHealth + val) <= 100 ? this.playerHealth + val : this.playerHealth;
    this.commentary.push('Your health is healed by ' + val);
  }

  giveUp() {
    this.playerHealth = 0;
    clearTimeout(this.timeInterval);
    clearInterval(this.dragonInterval);
    this.commentary.push('You gaveup the game !! ');
    this.openDialog({ name: 'Dragon', message: '' });
  }



  openDialog(data: any): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '350px',
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
