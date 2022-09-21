import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../pages/about/about.component';

import { ContactDetailsComponent } from '../pages/contacts/contact-details/contact-details.component';
import { ContactEditComponent } from '../pages/contacts/contact-edit/contact-edit.component';
import { ContactsPageComponent } from '../pages/contacts/contacts-page/contacts-page.component';
import { NewContactComponent } from '../pages/contacts/new-contact/new-contact.component';
import { CustomerDetailsComponent } from '../pages/Customers/customer-details/customer-details.component';
import { CustomerEditComponent } from '../pages/Customers/customer-edit/customer-edit.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { NewCustomerComponent } from '../pages/Customers/new-customer/new-customer.component';
import { ErroPageComponent } from '../pages/erro-page/erro-page.component';
import { LoginComponent } from '../pages/Users/login/login.component';

import { SignupComponent } from '../pages/Users/signup/signup.component';
import { AuthGuard } from './auth.guard';
import { LoggedGuard } from './logged.guard';

const routes: Routes = [
  {
    path: 'contacts',
    component: ContactsPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers',
    component: CustomersPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/new-customer',
    component: NewCustomerComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/new-contact',
    component: NewContactComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/contact-delits/:id',
    component: ContactDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/customer-delits/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'contacts/contact-edit/:id',
    component: ContactEditComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'customers/customer-edit/:id',
    component: CustomerEditComponent,
    canActivate: [AuthGuard],
  },

  { path: 'about', component: AboutComponent },

  { path: '', component: LoginComponent, canActivate: [LoggedGuard] },
  { path: 'signup', component: SignupComponent, canActivate: [LoggedGuard] },
  { path: '**', component: ErroPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
