import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceUsuarioService {


  constructor(private http: HttpClient) { }

  login(usuario: string, password: string) {
    return this.http.post<any>('/Usuario/iniciarSesion', { usuario, password });
  }

  logout(token: string) {
    return this.http.post<any>('/Usuario/cerrarSesion', { token });
  }

}
