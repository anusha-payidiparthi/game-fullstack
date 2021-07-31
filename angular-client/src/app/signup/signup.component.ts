import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  userData = {
    name: '',
    email: '',
    password: ''
  }
  showError = false;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  signupUser() {
    this.showError = false;
    this.userService.userSignup(this.userData).subscribe((res: any) => {
      if (res.success) {
        this.router.navigate(['/login'])
      } else {
        this.showError = true;
      }
    });
  }

}
