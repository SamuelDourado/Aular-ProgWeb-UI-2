import { Component, OnInit } from '@angular/core';

import {Subscription} from 'rxjs/Subscription';

import {CarrinhoService} from './carrinho.service';
import {Carrinho} from './carrinho';
import {Produto} from '../produto/produto';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  private subscription : Subscription;
  produtos : Produto[];
  ativado : boolean = true;
  isProductsLoad : boolean = false;

  constructor(private carrinhoService: CarrinhoService) {
    
   }

  ngOnInit() {
    this.recuperarCarrinho();
    
  }

  recuperarCarrinho(){
    this.carrinhoService.carrinho.subscribe( (carrinho: Carrinho) => {
      console.log(carrinho.produtos);
      this.produtos = carrinho.produtos;
      this.isProductsLoad = true;
    } );
  }

  ngOnDestroy() {
    this
        .subscription
        .unsubscribe();
  }

  adicionarProduto(produto: Produto){
    this.carrinhoService.adicionarProduto(produto);
  }

  removerProduto(id: number){
    this.carrinhoService.removerProduto(id);
  }


}
