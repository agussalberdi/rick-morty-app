import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { SpinnerService } from './services/spinner.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
    count = 0;

    constructor(private spinner: SpinnerService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.displaySpinner(true);
        this.count++;

        return next.handle(req).pipe(
            tap(
                event => console.log(event),
                error => console.log(error)
            ),
            finalize(() => {
                this.count--;
                if ( this.count === 0 ) {
                    this.spinner.displaySpinner(false);
                }
            })
        );
    }
}
