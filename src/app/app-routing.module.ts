import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path:'', component:PruebaComponent, canActivate:[]},
  {path:'padre', component:PadreComponent, canActivate:[], children:[
    {path:'hijo', component:HijoComponent, canActivate:[]},
  ]},
  {path:'register', component:RegistroComponent, canActivate:[]},
  {path:'**', component:NotFoundComponent, canActivate:[]}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
