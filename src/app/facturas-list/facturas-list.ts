import { Component } from '@angular/core';
import { Factura } from './Factura';

@Component({
  selector: 'app-facturas-list',
  standalone: false,
  templateUrl: './facturas-list.html',
  styleUrl: './facturas-list.scss'
})
export class FacturasList {
  facturas: Factura[] = [
    {
              name:  "Brownie",
              ingredients:  "Harina Integral, Manteca, Azucar",
              price:  1000,
              stock:  290,
              image: "img/brownie.png"
    },
    {
              name:  "Cheesecake",
              ingredients:  "Harina Integral, Manteca, Azucar",
              price:  5000,
              stock:  0,
              image: "img/cheesecake.webp"
    },
    {
              name:  "Churros",
              ingredients:  "Harina Integral, Manteca, Azucar",
              price:  1800,
              stock:  0,
              image: "img/churros.webp"
    },
    {
              name:  "Pastafrola",
              ingredients:  "Harina Integral, Manteca, Azucar",
              price:  6900,
              stock:  188,
              image: "img/Pastafrola.webp"
    }
  ]
}
