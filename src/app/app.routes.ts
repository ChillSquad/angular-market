import { ProductPageComponent } from './pages/product-page/product-page.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'cart-page',
    loadComponent: () => import('./pages/cart-page/cart-page.component').then((m) => m.CartPageComponent),
  }, 
  {
    path: 'favorites-page',
    loadComponent: () => import('./pages/favorites-page/favorites-page.component').then((m) => m.FavoritesPageComponent),
  },
  {
    path: 'profile-page',
    loadComponent: () => import('./pages/profile-page/profile-page.component').then((m) => m.ProfilePageComponent),
  },
  {
    path: 'product-page',
    loadComponent: () => import('./pages/product-page/product-page.component').then((m) => m.ProductPageComponent),
  },
];
