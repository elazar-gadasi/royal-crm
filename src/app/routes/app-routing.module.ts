import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from '../pages/about/about.component';
import { ContactsPageComponent } from '../pages/contacts/contacts-page/contacts-page.component';
import { CustomersPageComponent } from '../pages/Customers/customers-page/customers-page.component';
import { ErroPageComponent } from '../pages/erro-page/erro-page.component';
import { LoginComponent } from '../pages/login/login.component';
import { LogoutComponent } from '../pages/logout/logout.component';
import { SignupComponent } from '../pages/signup/signup.component';

const routes: Routes = [
  { path: 'contacts', component: ContactsPageComponent },
  { path: 'customers', component: CustomersPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: '**', component: ErroPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
