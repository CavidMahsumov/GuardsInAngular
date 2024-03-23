import { CanActivateFn } from '@angular/router';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { canActivateGuard, canDeactivateGuard } from './guards/guards';

const routes: Routes = [
  {path : "home",component:HomeComponent},
  {path : "about",component:AboutComponent},
  {path : "products",component:ProductsComponent, canActivate:[canActivateGuard],canDeactivate:[canDeactivateGuard],
   children:[{path:"productdetail",component:ProductDetailComponent}]},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
