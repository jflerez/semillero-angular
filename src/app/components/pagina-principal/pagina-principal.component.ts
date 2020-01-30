import { Component, OnInit } from "@angular/core";
import { PaginaPrincipalService } from "../../services/pagina-principal/pagina-principal.service";
import { Usuario } from "../../dto/usuario";

@Component({
  selector: "app-pagina-principal",
  templateUrl: "./pagina-principal.component.html",
  styleUrls: ["./pagina-principal.component.scss"]
})
export class PaginaPrincipalComponent implements OnInit {
  usuarios: Usuario;

  constructor(private principal: PaginaPrincipalService) {}

  ngOnInit() {
    this.principal.paginaPrincipal().subscribe(
      data => (this.usuarios = data),
      err => {
        console.log(err);
      },
      () => {
        console.log("complete");
      }
    );
  }
}
