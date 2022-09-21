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
import { ContactTabelComponent } from './pages/contacts/contacts-display-mode/contact-tabel/contact.component';
import { LinkSideNavComponent } from './layout/main/side-nav/link-side-nav/link-side-nav.component';
import { ErroPageComponent } from './pages/erro-page/erro-page.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './pages/Users/login/login.component';
import { SignupComponent } from './pages/Users/signup/signup.component';

import { CustomerComponent } from './pages/Customers/customer-display-mode/customer-tabel/customer.component';
import { FormsModule } from '@angular/forms';
import { NewCustomerComponent } from './pages/Customers/new-customer/new-customer.component';
import { CustomerFormComponent } from './pages/Customers/customer-form/customer-form.component';
import { NewContactComponent } from './pages/contacts/new-contact/new-contact.component';
import { ContactFormComponent } from './pages/contacts/contact-form/contact-form.component';

import { ContactDetailsComponent } from './pages/contacts/contact-details/contact-details.component';
import { ContactEditComponent } from './pages/contacts/contact-edit/contact-edit.component';
import { CustomerDetailsComponent } from './pages/Customers/customer-details/customer-details.component';
import { CustomerEditComponent } from './pages/Customers/customer-edit/customer-edit.component';
import { AgePipe } from './pipes/age/age.pipe';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { DisplayModeControllersComponent } from './components/display-mode-controllers/display-mode-controllers.component';
import { ContactFoldersComponent } from './pages/contacts/contacts-display-mode/contact-folders/contact-folders.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { LoaderComponent } from './components/loader/loader.component';
import { CustomerFoldersComponent } from './pages/Customers/customer-display-mode/customer-folders/customer-folders.component';
import { CustomerCardsComponent } from './pages/Customers/customer-display-mode/customer-cards/customer-cards.component';
import { ContactCardsComponent } from './pages/contacts/contacts-display-mode/contact-cards/contact-cards.component';

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
    ContactTabelComponent,
    LinkSideNavComponent,
    ErroPageComponent,
    AboutComponent,
    LoginComponent,
    SignupComponent,

    CustomerComponent,
    NewCustomerComponent,
    CustomerFormComponent,
    NewContactComponent,
    ContactFormComponent,

    ContactDetailsComponent,
    ContactEditComponent,
    CustomerDetailsComponent,
    CustomerEditComponent,
    AgePipe,
    SearchBarComponent,
    DisplayModeControllersComponent,
    ContactFoldersComponent,
    LoaderComponent,
    CustomerFoldersComponent,
    CustomerCardsComponent,
    ContactCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
