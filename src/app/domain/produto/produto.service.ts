import { Injectable } from '@angular/core';

import {Http, Headers, HttpModule, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

import {Produto} from './produto';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ProdutoService{

    public API_URL: string = 'http://localhost:8181/api';
    
    constructor(public http : Http){}

    findAll(): Observable<Produto[]>{
        return this.http
            .get(`${this.API_URL}/produto`)
            .map(res => res.json().content);
    }

    findOne(id: number): Observable<Produto[]>{
        return this.http
            .get(`${this.API_URL}/produto/${id}`)
            .map(res => res.json().content);
    }

    delete(id:number): Observable<boolean>{
        return this.http
            .delete(`${this.API_URL}/produto/${id}`)
            .map(res => res.json().content);
    }

    save(produto:Produto): Observable<Produto>{
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers : headers});

        if(produto.id){
            return this.http
                .put(`${this.API_URL}/produto`, JSON.stringify(produto), options)
                .map(res => res.json().content);
        }
        else{
            return this.http
                .post(`${this.API_URL}/produto`, JSON.stringify(produto), options)
                .map(res => res.json().content);
        }
    }


}