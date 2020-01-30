import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InicioSesion } from 'src/app/dto/inicio-sesion';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
  }


  iniciarSesion(request: any): Observable<InicioSesion> {
    request.token = "AAAKAKSDNFNCJN12L435L53J5";
    console.log("request recibido: ", request);
    return this.http.post<InicioSesion>('http://my-json-server.typicode.com/brayan1119/curso-angular/login', request);
  }

}
