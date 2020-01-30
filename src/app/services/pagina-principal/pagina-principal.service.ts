import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Usuario } from "../../dto/usuario";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class PaginaPrincipalService {
  constructor(private http: HttpClient) {}

  paginaPrincipal(): Observable<Usuario> {
    return this.http.get<Usuario>(
      "http://my-json-server.typicode.com/brayan1119/curso-angular/usuarios"
    );
  }
}
