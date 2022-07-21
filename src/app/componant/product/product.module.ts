import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwowayComponent } from '../data/twoway/twoway.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ReviewComponent } from './review/review.component';
import { ViewComponent } from './view/view.component';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

const routes:Routes=[
  {path:'',component:ProductComponent},
  {path:'create',component:CreateComponent},
  {path:'list',component:ListComponent},
  {path:'cart',component:CartComponent},
  {path:'view',component:ViewComponent},
  {path:'review',component:ReviewComponent},
]

@NgModule({
  declarations: [
    ProductComponent,
    ListComponent,
    CreateComponent,
    ReviewComponent,
    ViewComponent,
    CartComponent,],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,FormsModule,ReactiveFormsModule,
    
  ],
  exports:[RouterModule],
  providers:[DataService]
  
})
export class ProductModule { }
