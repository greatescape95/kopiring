import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';


// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { catchError, map, tap } from 'rxjs/operators';
import { ContactForm } from './interfaces/contactForm';

@Injectable()
export class AppService {
    private greetUrl = 'api/Hello/Greetings';
    private sendContactDataUrl = 'api/ContactForm/SendContactData';

    // Resolve HTTP using the constructor
    constructor(private _http: Http) { }

    sayHello(): Observable<any> {
        return this._http.get(this.greetUrl).map((response: Response) => {
            return response.text();
        });
    }

    sendContactData( data ): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        const body = JSON.stringify(data);
        return this._http.post(this.sendContactDataUrl, body, options).pipe(
            tap(() => console.log("uspjelo")));
    }
}
