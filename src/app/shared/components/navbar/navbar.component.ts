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
    { path: '/dashboard', name: 'Dashboard', icon: 'home' },
    { path: '/characters', name: 'Characters', icon: 'face' },
    { path: '/episodes', name: 'Episodes', icon: 'tv' },
    { path: '/locations', name: 'Episodes', icon: 'place' }
  ];

  constructor(public af: AngularFireAuth, private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/auth/login']);
  }

}
