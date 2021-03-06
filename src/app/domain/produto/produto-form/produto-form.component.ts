import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';

import {Produto} from '../produto';
import {ProdutoService} from '../produto.service';

import {Category} from './../../category/category';
import { CategoryService } from './../../category/category.service';

@Component({
    selector: 'produto-form',
    templateUrl: './produto-form.component.html',
    styleUrls: ['./produto-form.component.css']
  })

  export class ProdutoFormComponent implements OnInit {
    form: FormGroup;
    produto: Produto;
    public categories: Category[];

    constructor(
      private produtoService: ProdutoService,
       private formBuilder: FormBuilder, 
       private router: Router, 
       private route: ActivatedRoute,
       private categoryService: CategoryService
      ){
      
    }

    ngOnInit() {
      this.produto = new Produto();
      this.produto.id = this.route.snapshot.params['id'];
      console.log(this.produto.id);
      this.categoryService.findAll()
      .subscribe(categories => {
        this.categories = categories
      });

      if(this.produto.id){
        this.produtoService.findOne(this.produto.id)
          .subscribe(produto => {
              this.form.patchValue(produto);
            }
          );
      }
      
        this.form = this.formBuilder.group({
          id: [],
          name: ['', Validators.required],
          marca: [],
          descricao: [],
          preco: [],
          category: [],
        },{});
      

      
    }

    salvar(produto :Produto){
        this.produtoService.save(produto)
          .subscribe(response => {
              this.router.navigate(['/produto']);
          });
    }

  }