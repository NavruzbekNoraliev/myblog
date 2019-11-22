import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { HttpRequest, HttpHandler,
         HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';

@Injectable()
  export class AuthInterceptor implements HttpInterceptor {
    constructor(
      public  dialog: MatDialog,
    ) {}

    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {

      req = req.clone({
        setHeaders: {
          'Content-Type': 'application/json'
        }
      });

      return next.handle(req).pipe(
        tap(
          event => {
            if (event instanceof HttpResponse) {
              console.log('all looks good : ', event);
              if (event.body) {
                if (event.body.status === '401') {
                  return;
                }
              }
            }
          },
          err => {
            if (err) {
              if (err.status === 403) {
                return this.openDialog(
                  'Forbidden :/',
                  'Access to this location is denied'
                );
              }

              if (err.status === 404) {
                return this.openDialog(
                  '404 :(',
                  'The requested resource is not found'
                );
              }

              if (err.error ) {
                return this.openDialog(
                  'Oops!',
                  'Unable to login. Please, check your credentials!'
                );
              }

              this.openDialog('Oops!', 'Something went wrong.');
            }
          }
        )
      );
    }

    openDialog(title: string, text: string): void {
      console.log('Title: ' + title + '\n Text: ' + text);
    }
  }
