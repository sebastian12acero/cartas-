import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TarjetaComponent } from './tarjeta/tarjeta.component';

import { HeaderComponent } from './header/header.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TarjetaComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo de Angular';
  public contador: number = 10;
  public textoTarjeta: string = "Hola Mundo";
  

  Incrementar(value: number): void {
    // this.contador += value;
    this.contador = this.contador >= 10 ? this.contador: 10;
    
    // if (this.contador < 10) {
    //   this.contador = 10;
    //   alert("El contador siempre debe ser igual o mayor a 10")
    // }
    
  }
}
