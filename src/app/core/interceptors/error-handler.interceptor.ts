import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(catchError((error: HttpErrorResponse) => {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = error.error.message;
    } else {
      // Errores del lado del servidor
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(() => errorMessage);
  }));
};
