import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaracteristicasComponent } from './pages/caracteristicas/caracteristicas.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { IndexComponent } from './pages/index/index.component';

const routes: Routes = [
 // {
  //  path: '',

    //children:[
//      {
  //      path:'home', component:HomeComponent
    //  }
    //]
  //},{path:'inicio', component:HomeComponent}
  {path: '', redirectTo: '/index', pathMatch:'full'},//pagina inicial local +home
  {path: 'index', component: IndexComponent},
  {path: 'home', component: HomeComponent},
  {path: 'caracteristicas', component: CaracteristicasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
