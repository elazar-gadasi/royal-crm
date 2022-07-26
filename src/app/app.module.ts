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
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
