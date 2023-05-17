import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HomeComponent } from './components/home/home.component';
import { OfertasComponent } from './components/ofertas/ofertas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { E404Component } from './components/e404/e404.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginGuard } from './guards/login.guard';
const routes: Routes = [
{path: "home", component:HomeComponent},
{path: "nosotros", component:NosotrosComponent},
{path: "ofertas", component:OfertasComponent},
{path: "productos", component:ProductosComponent},
{path: "inventario", component:InventarioComponent, canActivate:[LoginGuard]},
{path: "login", component:LoginComponent},
{path: "registro", component:RegistroComponent},
{path: "", redirectTo:"home", pathMatch:"full"},
{path: "**", component:E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
