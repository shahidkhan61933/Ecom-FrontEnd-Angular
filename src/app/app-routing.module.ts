import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './componant/about-us/about-us.component';
import { HomeComponent } from './componant/home/home.component';
import { HomeModule } from './componant/home/home.module';
import { NotFoundComponent } from './componant/not-found/not-found.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutUsComponent},
  {path:'product',loadChildren:()=> import("./componant/product/product.module").then(m=>m.ProductModule), canActivate:[AuthGuardService] },
  {path:'data',loadChildren:()=>import("./componant/data/data.module").then(m=>m.DataModule)},
  {path:'auth',loadChildren:()=>import("./componant/auth/auth.module").then(m=>m.AuthModule)},
  {path:'**',component:NotFoundComponent},
  ];
  
 



@NgModule({
  imports: [RouterModule.forRoot(routes),HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
