import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationManagementComponent } from './components/information-management/information-management.component';
import { InformationListPageComponent } from './components/information-management/information-list-page/information-list-page.component';
import { InformationEditPageComponent } from './components/information-management/information-edit-page/information-edit-page.component';
import { HelpListPageComponent } from './components/settings-list/help-list-page/help-list-page.component';
import { StatuteListPageComponent } from './components/settings-list/statute-list-page/statute-list-page.component';
import { PrivacyListPageComponent } from './components/settings-list/privacy-list-page/privacy-list-page.component';
import { ProductsComponent } from './components/settings-list/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    InformationManagementComponent,
    InformationListPageComponent,
    InformationEditPageComponent,
    HelpListPageComponent,
    StatuteListPageComponent,
    PrivacyListPageComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
