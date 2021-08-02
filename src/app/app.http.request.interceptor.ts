import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Observable, of } from "rxjs";
import { tap, catchError } from "rxjs/operators";

export class AddHeaderInterceptor implements HttpInterceptor {

  private token = null;
  private AUTH_HEADER = "Authorization";

  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    
    
    req = this.addAuthenticationToken(req);
    
        return next.handle(req).pipe(
            tap(evt => {
                if (evt instanceof HttpResponse) {
                  if( evt.headers.get(this.AUTH_HEADER) ) {
                    this.token = evt.headers.get(this.AUTH_HEADER); 
                  }
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                  if( err.status == 401 ) {
                    if( err.headers.get("errorMessage") != null ) {
                      alert( "Error de seguridad:" + err.headers.get("errorMessage") );
                    } else {
                      alert( "Error de seguridad: Acceso no Autorizado");
                    }
                    window.location.href = "/logout.html";
                  } else {
                    if( err.headers.get("errorMessage") != null ) {
                      alert("Error:" + err.headers.get("errorMessage") );
                    } else {
                      alert("Error " + err.status + " " +err.statusText);
                    }
                  }
                    try {
                        //
                    } catch(e) {
                        //this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
                    }
                    //log error 
                }
                return of(err);
            }));
    
      }
    
      private addAuthenticationToken(request: HttpRequest<any>): HttpRequest<any> {
        // If we do not have a token yet then we should not set the header.
        // Here we could first retrieve the token from where we store it.
        /*
        if (!this.token) {
          try {
            let tokenStr = localStorage.getItem("token");
            if( tokenStr != null ) {
              this.token = tokenStr
              console.log("token from localStorage");
            }
          } catch( e ) {
            console.log("No se encontro el token");
          }
        }
        */
        // If you are calling an outside domain then do not add the token.
       // if (!request.url.match(/www.mydomain.com\//)) {
        //  return request;
        //}
        if( this.token == null ) {
          return request.clone();
  
        }
        return request.clone({
          headers: request.headers.set(this.AUTH_HEADER, this.token)
        });
      }
}
