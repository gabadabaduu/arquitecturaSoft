import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './Pages/catalogo/catalogo.component';
import { CompraComponent } from './Pages/compra/compra.component';
import { IniciarSesionComponent } from './Pages/iniciar-sesion/iniciar-sesion.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component:IniciarSesionComponent},
  { path: 'catalogo', component: CatalogoComponent},
  { path: 'compra', component: CompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
