import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/characters', name: 'Characters' },
    { path: '/chapters', name: 'Chapters' }
  ];

  constructor() {}

  ngOnInit(): void {
  }

}
