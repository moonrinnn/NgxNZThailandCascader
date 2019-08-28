import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class NgxNZThailandSelectorService {

	constructor(private http: HttpClient) {}

	public getCities(): Observable<any> {
		return of(null);
	}
}
