import { Component, OnInit } from '@angular/core';

import {ProdutoService} from '../produto.service';
import {Produto} from '../produto';

@Component({
    selector: 'produto-in-car',
    templateUrl: './produto-in-car.component.html',
    styleUrls: ['./produto-in-car.component.css']
  })
  export class ProdutoInCarComponent implements OnInit {
    produtos: Produto[];
    groupedProduto : Array<any> = [];

    constructor(
      private produtoService: ProdutoService
    ){}

    ngOnInit() {
        this.produtos = JSON.parse(localStorage.getItem("carrinho"));
    }
  }

