import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/user/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private servicio: UsuariosService, private ruta: Router) { }


  user: string = ""
  pass: string = ""

  guardarJSON() {
    const temp = {
      name: this.user,
      contrasenia: this.pass
    }
    this.limpiar()

    return temp;
  }

  //LIMPIAR INPUTS
  limpiar() {
    this.user = ""
    this.pass = ""
  }

  login() {
    const aux = this.guardarJSON()
console.log(aux)
    this.servicio.getFerre().subscribe(p => {
      for (const doc of p) {
        if (JSON.stringify(doc) == JSON.stringify(aux)) {
          console.log("Encontrado")
          localStorage.setItem('login', 'true')
          this.ruta.navigate(['/inventario'])
          break;
        } else {
          console.log("No encontrado")
          localStorage.setItem('login', 'false')
          this.ruta.navigate(['/registro'])
        }
      }
    })

  }

}
