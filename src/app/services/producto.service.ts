import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders, HttpResponse } from '@angular/common/http';
import { Producto } from '../models/producto';
import { GLOBAL } from './global';
import { Observable } from 'rxjs';


@Injectable()
export class ProductoService{
    public url:string;

    constructor(
        private _http:HttpClient
    ){
        this.url=GLOBAL.url;
    }


    getProductos(): Observable<any>{
        return this._http.get(this.url+'productos');

    }

    addProducto(producto:Producto){
        let json = JSON.stringify(producto);
        console.log(json);
        let params = 'json='+json;
        let headers = new HttpHeaders({'Content-Type':'application/x-www-form-urlencoded'});
        return this._http.post(this.url+'productos', params,{headers});
    }
    
}
