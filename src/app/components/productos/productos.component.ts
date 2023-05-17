import { Component } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {
  constructor(private servicio: InventarioService) { }

  dataProducto: any;

  ngOnInit() {
    this.servicio.getinventario().subscribe(producto => {
      this.dataProducto = producto
    })
  }

}
