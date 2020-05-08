import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '@core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/characters', name: 'Characters' },
    { path: '/episodes', name: 'Episodes' }
  ];

  constructor(public af: AngularFireAuth, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
