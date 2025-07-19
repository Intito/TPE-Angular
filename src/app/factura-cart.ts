import { Injectable } from '@angular/core';
import { Factura } from './facturas-list/Factura';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaCart {
  
  private _cartList: Factura[] = [];
  cartList: BehaviorSubject<Factura[]> = new BehaviorSubject(this._cartList);

  addToCart(factura: Factura){
    const item: Factura | undefined = this._cartList.find((v1) => v1.name == factura.name);
    if(!item){
        this._cartList.push({ ... factura});
    } else {
      item.quantity += factura.quantity;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList);
  }

}
