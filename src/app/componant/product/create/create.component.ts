import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  //define reactive Form 
  public createProductForm:FormGroup;
  public isSubmited:boolean = false;
  public state:any;

  constructor(private fb: FormBuilder, private productSrv: ProductService, private router: Router) {

    // initialize reactive form with form builder
    this.createProductForm = this .fb.group({
      id :['', [Validators.required]],
      name:['', [Validators.required, Validators.minLength(6), Validators.maxLength(20)]],
      price:['',[Validators.required]],
      description:['',[Validators.required,]],
      imageUrl:['',[Validators.required]],
      manufacturer:['',[Validators.required]],
      brand:['',[Validators.required]],
      seller:['',[Validators.required]],
      type:['',[Validators.required]],
      createdAt:['',[Validators.required]],
      
     
    });

   }

  ngOnInit(): void {
    console.log(history.state.product);
      if(history.state.product!=null) {
        this.createProductForm.patchValue(history.state.product);
      }
  }
  
    public validateForm(form:any){
      Object.keys(form.controls).forEach(field =>{
        const control = form.controls[field];
        if(control instanceof FormControl){
          control.markAsTouched({onlySelf : true});

        }else{
          this.validateForm(form);

        }
      })
    }
    public onSubmit(form: any): void {
      if (form.valid) {
        this.isSubmited = true;
        console.log(this.createProductForm.value);
        this.handleProduct(this.createProductForm.value) ;
      } else {
        this.validateForm(form)
        console.log("Form is not Valid.");
      }
    }
    public handleProduct(product: any):void {
      if(product.id !=null && product.id != "") {
        this.updateProduct(product);
      } else{
        this.createProduct(product);
      }
    }
    public createProduct(product: any):void {
      // consume add product api
      this.productSrv.addProduct(product).subscribe((data: any) => {
        console.log("Product created successfully.", data);
        this.router.navigateByUrl("/products");
      }, (error: any) => {
        console.log("Product creation failed.", error);
      })
    }
    public updateProduct(product: any):void {
      // consume add product api
   this.productSrv.updateProduct(product).subscribe((data: any) => {
     console.log("Product updated successfully.", data);
     this.router.navigateByUrl("/products");
   }, (error: any) => {
     console.log("Product updation failed.", error);
   })
 }
    hasError(name:string) {
      const field = this.createProductForm.get(name);
      return (field?.invalid && field?.touched && field?.errors);
     }
     get form (){
      return this.createProductForm.controls;


     }
     get id(){
      return this.form['id'];

     }
     get name(){
      return this.form['name'];
      
     }
     get price(){
      return this.form['price'];
      
     }
     get description(){
      return this.form['description'];
      
     }
     get imageUrl(){
      return this.form['imageUrl'];
      
     }
     get manufacturer(){
      return this.form['manufacturer'];
      
     }
     get brand(){
      return this.form['brand'];
      
     }
     get seller(){
      return this.form['seller'];
      
     }
     get type(){
      return this.form['ProductType'];
      
     }
     get createdAt(){
      return this.form['createdAt'];
      
     }
     
  }


