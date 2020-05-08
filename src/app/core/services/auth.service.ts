import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * @desc This service manage the authentification of an user in the application.
 */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public af: AngularFireAuth) {}

  get authState() {
    return this.af.authState;
  }

  /**
   * @desc Method for creating a new user.
   */
  createUser(email: string, password: string) {
    return this.af.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * @desc Method for user login.
   */
  login(email: string, password: string) {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * @desc Method for user logout.
   */
  logout() {
    return this.af.auth.signOut();
  }
}
