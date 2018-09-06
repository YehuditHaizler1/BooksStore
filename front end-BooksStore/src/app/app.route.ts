import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductsComponent } from './components/products/products.component';
import { AccountComponent } from './components/account/account.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CanActivateIfNotLogin, CanActivateIfLogin } from './shared/auth.guard';
  
const headerRoutes: Routes = [
    { path: 'BooksStore/home', component: HomeComponent, },
    { path: 'BooksStore', redirectTo: 'BooksStore/home' },
    { path: 'BooksStore/cart', component: CartComponent , canActivate: [CanActivateIfLogin] },
    { path: 'BooksStore/products', component: ProductsComponent },
    {
        path: 'BooksStore/account', component: AccountComponent, children: [
            { path: 'register', component: RegisterComponent , canActivate: [CanActivateIfNotLogin] },
            { path: 'login', component: LoginComponent ,canActivate: [CanActivateIfNotLogin]},
             {path:'logout',component:LoginComponent}
        ]
    },
    { path: 'BooksStore/productsDeatails', component: ProductDetailsComponent },
    { path: '**', redirectTo: 'BooksStore/home' },
    
    
];
export const headerRouting = RouterModule.forRoot(headerRoutes);