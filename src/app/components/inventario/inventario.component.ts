import { Component } from '@angular/core';
import { InventarioService } from 'src/app/services/inventario.service';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent {
  constructor(private servicio: InventarioService){}

  saveinventario(id: string, producto: string, precio:number, cantidad:number, descripcion:string,
    marca:string, categoria:string, codigo:string){
    
    const temp= {
      
      "id":id,
      "producto": producto,
      "precio": precio,
      "cantidad":cantidad,
      "descripcion": descripcion,
      "marca": marca,
      "categoria": categoria,
      "codigo":codigo
    
    }

    this.servicio.postinventario(temp).subscribe(obj =>{})
    console.log(temp)
  }

  updateinventario(id: string, producto: string, precio:number, cantidad:number, descripcion:string,
    marca:string, categoria:string, codigo:string ){
    const ide: number= parseInt(id)
    const temp= {
      "id":id,
      "producto": producto,
      "precio": precio,
      "cantidad":cantidad,
      "descripcion": descripcion,
      "marca": marca,
      "categoria": categoria,
      "codigo":codigo
    }
    this.servicio.putinventario(temp, id).subscribe(u =>{})
}
eliminarinventario(id:string){
  const ide: number= parseInt(id)
  this.servicio.deleteinventario(ide).subscribe(u=>{})
}
}
