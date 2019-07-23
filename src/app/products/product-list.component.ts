import {Component, OnInit} from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
 
    templateUrl:'./product-list.component.html',
    styleUrls: ['/product-list.component.css'],
    providers: [ProductService]
})
export class ProductListComponent implements OnInit{
    
    constructor( private productService: ProductService){}

    pageTitle: string='Product List';
    imageWidth: number=50;
    imageMargin: number=2;
    showImage: boolean=false;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value:string){
        this._listFilter=value;
        this.filteredProducts= this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }
    filteredProducts: IProduct[];
    products: IProduct[]=[];


    // constructor(){
    //     this.filteredProducts=this.products;
    //     this.listFilter='cart';
    // }

    toggleImage(): void {
        this.showImage=!this.showImage;
    }

    performFilter(filterBy: string): IProduct[]{
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) =>
                   product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    ngOnInit(): void{
      this.productService.getProducts().subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        },
        //error => this.errorMessage = <any>error
      );     
       
    }

    onRatingClicked(message: string):void{
        this.pageTitle='Product List: '+message;
    }
}