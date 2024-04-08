import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
id: string;
  constructor(private router: Router, public authService: AuthService) { }

  ngOnInit() {
  	this.id = localStorage.getItem('token');
  }
   logout(): void {
    console.log("Logout");
    this.authService.logoutva();
    this.router.navigate(['/login']);
  }

}
