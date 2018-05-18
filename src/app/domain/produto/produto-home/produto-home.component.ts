import { Component, OnInit } from '@angular/core';

import {ProdutoService} from '../produto.service';
import {Produto} from '../produto';
import {CarrinhoService} from '../../carrinho/carrinho.service';

@Component({
    selector: 'produto-home',
    templateUrl: './produto-home.component.html',
    styleUrls: ['./produto-home.component.css']
  })
  export class ProdutoHomeComponent implements OnInit {

    produtos: Produto[];

    constructor(
      private produtoService: ProdutoService,
      private carrinhoService: CarrinhoService
    ){}

    ngOnInit() {
      this.produtoService.findAll()
        .subscribe(produtos => {
          this.produtos = produtos
        });
    }

    adicionarProduto(produto: Produto){
      this.carrinhoService.adicionarProduto(produto);
    }

  }