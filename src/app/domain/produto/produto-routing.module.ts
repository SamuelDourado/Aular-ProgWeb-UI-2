import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { ProdutoListComponent } from './produto-list/produto-list.component';
import { ProdutoFormComponent } from './produto-form/produto-form.component';
import {ProdutoHomeComponent} from './produto-home/produto-home.component';
import {ProdutoInCarComponent} from './produto-in-car/produto-in-car.component';

const ProdutoRoutes: Routes = [
    {path: '', component: ProdutoListComponent},
    {path: 'form', component: ProdutoFormComponent},
    {path: 'home', component: ProdutoHomeComponent},
    {path: 'form/:id', component: ProdutoFormComponent},
    {path: 'car', component: ProdutoInCarComponent},
]; 

@NgModule({
    imports: [RouterModule.forChild(ProdutoRoutes)],
    exports: [RouterModule]
  })
  
export class ProdutoRouting {}