import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';

import {Category} from '../category';
import {CategoryService} from '../category.service';

@Component({
    selector: 'category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
  })
  export class CategoryFormComponent implements OnInit {

    form: FormGroup;

    constructor(private categoryService: CategoryService, private formBuilder: FormBuilder){
      
    }

    ngOnInit() {
      this.form = this.formBuilder.group({
        id: [],
        name: ['', Validators.required]
      },{});
    }

  }