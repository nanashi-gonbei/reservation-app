import { Routes } from '@angular/router';

import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-product-list',
    pathMatch: 'full',
  },
  {
    path: 'app-product-list',
    component: ProductListComponent,
  },
  {
    path: 'app-product-detail',
    component: ProductDetailComponent,
  },
];
