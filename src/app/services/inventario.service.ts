import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }
  private API_INVENTARIO='http://localhost:3000'

  postinventario(cafe:any):Observable<any>{
    return this.http.post(this.API_INVENTARIO, cafe)
    }
    //METODO GET
    getinventario(): Observable <any>{
      return this.http.get(this.API_INVENTARIO)
    }
    
    //METODO PUT
    putinventario(user: any, id:string): Observable <any>{
      this.API_INVENTARIO =`${this.API_INVENTARIO}/${id}`
      return this.http.put(this.API_INVENTARIO, user)
    }
    
    //METODO DELETE
    deleteinventario(id:number): Observable <any>{
      this.API_INVENTARIO = `${this.API_INVENTARIO}/${id}`
      return this.http.delete(this.API_INVENTARIO)
    }
}
