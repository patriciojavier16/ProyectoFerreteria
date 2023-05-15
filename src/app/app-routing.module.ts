import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { E404Component } from './components/e404/e404.component';
const routes: Routes = [
{path: "home", component:HomeComponent},
{path: "nosotros", component:NosotrosComponent},
{path: "ofertas", component:OfertasComponent},
{path: "productos", component:ProductosComponent},
{path: "", redirectTo:"home", pathMatch:"full"},
{path: "**", component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
