import { Component } from '@angular/core';
import { Factura } from './Factura';
import { FacturaCart } from '../factura-cart';

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
              ingredients:  "Harina, Manteca",
              price:  1000,
              stock:  8,
              image: "img/brownie.png",
              quantity: 0
    },
    {
              name:  "Cheesecake",
              ingredients:  "Harina Integral, Manteca",
              price:  5000,
              stock:  0,
              image: "img/cheesecake.webp",
              quantity: 0
    },
    {
              name:  "Churros",
              ingredients:  "Harina, Azucar",
              price:  1800,
              stock:  0,
              image: "img/churros.webp",
              quantity: 0
    },
    {
              name:  "Pastafrola",
              ingredients:  "Harina Integral, Manteca",
              price:  6900,
              stock:  4,
              image: "img/Pastafrola.webp",
              quantity: 0
    }
  ];

  constructor(private cart:FacturaCart){
  }

  upQuantity(factura: Factura): void{
    if(factura.quantity < factura.stock){
      factura.quantity++;
    }
  }

  downQuantity(factura: Factura): void{
    if(factura.quantity > 0){
      factura.quantity--;
    }
  }

  addToCart(factura: Factura): void{
    this.cart.addToCart(factura);
    factura.stock -= factura.quantity;
    factura.quantity = 0;
  }
}
