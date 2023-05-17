import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  private API_FERRE = "http://localhost:3000/usuarios"

  getFerre(): Observable<any> {
    return this.http.get(this.API_FERRE);

  }
}
