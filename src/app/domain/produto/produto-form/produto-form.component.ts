import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';

import {Produto} from '../produto';
import {ProdutoService} from '../produto.service';

@Component({
    selector: 'produto-form',
    templateUrl: './produto-form.component.html',
    styleUrls: ['./produto-form.component.css']
  })

  export class ProdutoFormComponent implements OnInit {
    form: FormGroup;
    produto: Produto;

    constructor(private produtoService: ProdutoService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute){
      
    }

    ngOnInit() {
      this.produto = new Produto();
      this.produto.id = this.route.snapshot.params['id'];

      if(this.produto.id != null){
        this.produtoService.findOne(this.produto.id)
          .subscribe(produto => {
              this.form.patchValue(produto);
            }
          );
      }
      else{
        this.form = this.formBuilder.group({
          id: [],
          name: ['', Validators.required],
          marca: [],
          descricao: [],
          preco: [],
        },{});
      }

      
    }

    salvar(produto :Produto){
        this.produtoService.save(produto)
          .subscribe(response => {
              this.router.navigate(['/produto']);
          });
    }

  }