import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    selector: 'productos_list',
    templateUrl: '../views/productos_list.html'
})

export class ProductosListComponent{
    public titulo: string;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){
        this.titulo = 'Listado de productos';
    }

    ngOnInit(){
        console.log('Componente productos_list.component.ts cargado');
    }
}
