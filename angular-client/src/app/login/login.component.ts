import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { GlobalDataService } from '../services/global-data.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userData = {
    email: '',
    password: ''
  }

  constructor(private userService: UserService, private router: Router, private globalDataService: GlobalDataService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this.userService.userLogin(this.userData).subscribe((res: any) => {
      if (res.success) {
        this.globalDataService.set('user_data', res.data);
        this.router.navigate(['/home'])
      }
    });
  }
}
