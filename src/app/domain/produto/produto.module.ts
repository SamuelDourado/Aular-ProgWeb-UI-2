import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

//Componests
import {ProdutoListComponent} from './produto-list/produto-list.component';
import {ProdutoFormComponent} from './produto-form/produto-form.component';
import {ProdutoHomeComponent} from './produto-home/produto-home.component';
import {ProdutoInCarComponent} from './produto-in-car/produto-in-car.component';
//Routing
import {ProdutoRouting} from './produto-routing.module';

//Service
import {ProdutoService} from './produto.service';

import { CategoryService } from './../category/category.service';

@NgModule({
    declarations: [
        //Componentes
        ProdutoListComponent,
        ProdutoFormComponent,
        ProdutoHomeComponent,
        ProdutoInCarComponent
    ],
    imports: [
      // angular
      HttpModule,
      RouterModule,
      CommonModule,
      // para utilizar formularios
      FormsModule,
      ReactiveFormsModule,

      // Routing
      ProdutoRouting
    ],
    
    providers: [
      // services
      ProdutoService,
      CategoryService
    ]
  })
  export class ProdutoModule { }
