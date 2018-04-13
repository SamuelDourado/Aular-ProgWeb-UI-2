import { Component, OnInit } from '@angular/core';

import {ProdutoService} from '../produto.service';
import {Produto} from '../produto';

@Component({
    selector: 'produto-list',
    templateUrl: './produto-list.component.html',
    styleUrls: ['./produto-list.component.css']
  })
  export class ProdutoListComponent implements OnInit {

    produtos: Produto[];

    constructor(
      private produtoService: ProdutoService
    ){}

    ngOnInit() {
      this.produtoService.findAll()
        .subscribe(produtos => {
          this.produtos = produtos
        });
    }

    delete(id: number,index: number){
      this.produtoService.delete(id)
        .subscribe(
          response =>{
            if(response == true){
              this.produtos.splice(index,1);
            }
          }
        );
    }

  }