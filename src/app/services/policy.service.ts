import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "environments/environment";
import { Observable } from "rxjs";
import { Policy } from "./model/Policy";

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(`${environment.apiUrl}/policies`);
  }

  favoritePolicy(id: number): Observable<Policy> {
    return this.http.patch<Policy>(`${environment.apiUrl}/policies/${id}`, { "favorite": true });
  }
}

