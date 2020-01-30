import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login/login.service';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  inicioSesionFrom: FormGroup;
  nombre = "Jonathan";


  constructor(private loginService: LoginService) { }

  ngOnInit() {

    this.crearFormulario();
  }


  crearFormulario() {
    this.inicioSesionFrom = new FormGroup({
      nombreUsuario: new FormControl(null, [Validators.required, Validators.min(2)]),
      clave: new FormControl(null, Validators.required)
    });
  }


  enviarFormulario(){
    console.log("formulario", this.inicioSesionFrom.value);
    this.loginService.iniciarSesion(this.inicioSesionFrom.value).subscribe(data =>
      console.log("data recibida: ", data)
    , err => {
      console.log(err);
  }, () => {
     console.log("complete");
  });
}

}
