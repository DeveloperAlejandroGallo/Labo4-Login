import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../../classes/usuario';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private route: Router) { }
  usuario = new Usuario();
  mensaje: string;

  ngOnInit(): void {

  }
  save(event)
  {
    this.btnIngresar_Click();
  }

  btnIngresar_Click(): void
  {
    this.usuario.nombre = (document.getElementById('txtUsuario') as HTMLInputElement).value;
    this.usuario.clave = (document.getElementById('txtPassword') as HTMLInputElement).value;

    console.log(this.usuario.nombre );
    console.log(this.usuario.clave );

    if (this.usuario.nombre !== '' )
    {
      if (this.usuario.clave !== '' )
      {
        if (this.usuario.nombre === 'admin' && this.usuario.clave === 'admin')
        {
          console.log('Yendo a Bienvenido');
          localStorage.clear();
          localStorage.setItem(this.usuario.nombre, JSON.stringify(this.usuario));
          this.route.navigate(['bienvenido']);
        }
        else
        {
          console.log('Yendo a error');
          this.route.navigate(['error']);
        }
      }
      else
      {this.mensaje = 'Debe ingresar clave'; }
    }
    else
    {this.mensaje = 'Debe ingresar un usuario'; }
    (document.getElementById('lblMensaje') as HTMLInputElement).innerText = this.mensaje;
  }
}
