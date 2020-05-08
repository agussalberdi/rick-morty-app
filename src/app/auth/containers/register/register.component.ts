import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  async register(event: FormGroup) {
      const { email, password } = event.value;
      try {
          await this.authService.createUser(email, password);
          this.router.navigate(['/dashboard']);
      } catch (error) {
          this.error = error.message;
      }
  }
}
