import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface LoaderState {
  show: boolean;
}

/**
 * @desc this service will hold functionalities for custom loader display.
 */

@Injectable()
export class SpinnerService {
  private spinnerStatusState = new Subject<LoaderState>();

  /**
   * @desc returns an observable of the spinner state
   * @return Subject<LoaderState>
   */
  getSpinnerObservable(): Subject<LoaderState> {
    return this.spinnerStatusState;
  }

  /**
   * @desc sets an boolean value to display or hide the spinner
   * @param value - a boolean value that represents the new state of the spinner
   * @return Subject<LoaderState>
   */
  displaySpinner(value: boolean) {
    this.spinnerStatusState.next({ show: value });
  }
}
