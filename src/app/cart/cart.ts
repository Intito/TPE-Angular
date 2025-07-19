import { Component } from '@angular/core';
import { FacturaCart } from '../factura-cart';
import { Factura } from '../facturas-list/Factura';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.scss'
})
export class Cart {

  cartList$!: Observable<Factura[]>;
  constructor(private cart:FacturaCart){
    this.cartList$ = cart.cartList.asObservable();
  }
}
