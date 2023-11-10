import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router) { }
   isLoggedIn: boolean = false;


  ngOnInit(): void {
  }
  signIn() {
    // Set isLoggedIn to true.
    this.isLoggedIn = true;

    // Navigate to the HomeComponent and pass isLoggedIn.
    this.router.navigate(['/home'], { queryParams: { isLoggedIn: this.isLoggedIn }, skipLocationChange: true });
  }

}
