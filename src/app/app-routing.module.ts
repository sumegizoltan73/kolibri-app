import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'home', 
    loadChildren: () => import('./home-detail/home-detail.module').then(m => m.HomeDetailModule) 
  }, 
  { 
    path: 'contact', 
    loadChildren: () => import('./contact-detail/contact-detail.module').then(m => m.ContactDetailModule) 
  }, 
  { 
    path: 'admin', 
    loadChildren: () => import('./admin-detail/admin-detail.module').then(m => m.AdminDetailModule) 
  }, 
  { 
    path: 'booking', 
    loadChildren: () => import('./booking-detail/booking-detail.module').then(m => m.BookingDetailModule) 
  }, 
  { 
    path: 'price', 
    loadChildren: () => import('./price-detail/price-detail.module').then(m => m.PriceDetailModule) 
  }, 
  { 
    path: 'tour360', 
    loadChildren: () => import('./tour360-detail/tour360-detail.module').then(m => m.Tour360DetailModule) 
  },
  { 
    path: 'offers', 
    loadChildren: () => import('./offers-detail/offers-detail.module').then(m => m.OffersDetailModule) 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
