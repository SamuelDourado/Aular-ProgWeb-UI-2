import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {ActivatedRoute, Router} from '@angular/router';

import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
  })

  export class CategoryFormComponent implements OnInit {
    form: FormGroup;
    category: Category;

    constructor(private categoryService: CategoryService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute){
      
    }

    ngOnInit() {
      this.category = new Category();
      this.category.id = this.route.snapshot.params['id'];

      if(this.category.id != null){
        this.categoryService.findOne(this.category.id)
          .subscribe(category => {
              this.form.patchValue(category);
            }
          );
      }
      else{
        this.form = this.formBuilder.group({
          id: [],
          name: ['', Validators.required]
        },{});
      }

      
    }

    salvar(category :Category){
        this.categoryService.save(category)
          .subscribe(response => {
              this.router.navigate(['/category']);
          });
    }

  }