import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async login(event: FormGroup) {
      const { email, password } = event.value;
      try {
          await this.authService.login(email, password);
          this.router.navigate(['/dashboard']);
      } catch (error) {
          this.error = error.message;
      }
  }
}
