import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SpinnerService } from '@core/services/spinner.service';

@Component({
  selector: 'app-spinner',
  template: ` <div class="loading" *ngIf="subscription$ | async"></div> `,
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent implements OnInit {
  subscription$: Observable<boolean>;

  constructor(private spinnerService: SpinnerService, private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.subscription$ = this.spinnerService.getSpinnerObservable().pipe(map((s) => s.show));
  }

}
