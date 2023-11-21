import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tarjeta.component.html',
  styleUrl: './tarjeta.component.css'
})
export class TarjetaComponent {
  @Input() img: String = "Soy la imagen generica"
  @Input() title: String = "Soy el titulo generico"
  @Input() text: String = "Soy el texto generico"
  @Input() preciorebaja: String = "Soy el precio real generico"
  @Input() precioventa: String = "Soy el precio de venta generico"

}
