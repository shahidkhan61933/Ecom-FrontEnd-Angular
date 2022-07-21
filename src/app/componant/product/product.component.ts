import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: any;


  constructor(public productService: ProductService, private router: Router) {

  }

  ngOnInit(): void {
    this.getAllProduct();

  }
  getAllProduct() {
    this.productService.getProduct()
      .subscribe((data: any) => {
        this.product = data;
        console.log(data);

      }, (error: any) => {
        console.log(error);

      });
  }
  public onEdit(pdata: any): void {
    // console.log(product);
    this.router.navigateByUrl("/product/create", { state: { product: pdata } })
  }
  public onDelete(productId: number): void {
    this.productService.deleteProduct(productId).subscribe((data: any) => {
      console.log("Product is delete successFull", data);
    }, (error: any) => {
      console.log(error);
      this.getAllProduct();
    })
  }

}
