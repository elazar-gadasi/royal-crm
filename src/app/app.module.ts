import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './root/app.component';
import { CustomersPageComponent } from './pages/Customers/customers-page/customers-page.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainComponent } from './layout/main/main.component';
import { SideNavComponent } from './layout/main/side-nav/side-nav.component';
import { LogoComponent } from './layout/header/top-nav/logo/logo.component';
import { HamburgerComponent } from './layout/header/top-nav/hamburger/hamburger.component';
import { LeftTopNavComponent } from './layout/header/top-nav/left-top-nav/left-top-nav.component';
import { RightTopNavComponent } from './layout/header/top-nav/right-top-nav/right-top-nav.component';
import { LoggedComponent } from './layout/header/top-nav/right-top-nav/logged/logged.component';
import { NotLoggedComponent } from './layout/header/top-nav/right-top-nav/not-logged/not-logged.component';

import { ContactsPageComponent } from './pages/contacts/contacts-page/contacts-page.component';
import { NavLinkTopComponent } from './layout/header/nav-link-top/nav-link-top.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { textCapitalPipe } from './pipes/textCapital/sub-tite.pipe';
import { ContactComponent } from './pages/contacts/contact/contact.component';
import { LinkSideNavComponent } from './layout/main/side-nav/link-side-nav/link-side-nav.component';
import { ErroPageComponent } from './pages/erro-page/erro-page.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { CustomerComponent } from './pages/Customers/customer/customer.component';
import { FormsModule } from '@angular/forms';
import { NewCustomerComponent } from './pages/Customers/new-customer/new-customer.component';
import { CustomerFormComponent } from './pages/Customers/customer-form/customer-form.component';
import { NewContactComponent } from './pages/contacts/new-contact/new-contact.component';
import { ContactFormComponent } from './pages/contacts/contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersPageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    LogoComponent,
    HamburgerComponent,
    LeftTopNavComponent,
    RightTopNavComponent,
    LoggedComponent,
    NotLoggedComponent,

    ContactsPageComponent,
    NavLinkTopComponent,
    PageHeaderComponent,
    textCapitalPipe,
    ContactComponent,
    LinkSideNavComponent,
    ErroPageComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent,
    CustomerComponent,
    NewCustomerComponent,
    CustomerFormComponent,
    NewContactComponent,
    ContactFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
