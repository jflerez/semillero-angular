import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

  inicioSesionFrom: FormGroup;
  nombre = "Jonathan";


  constructor() { }

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
  }


}
