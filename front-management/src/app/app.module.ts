import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationManagementComponent } from './components/information-management/information-management.component';
import { InformationListPageComponent } from './components/information-management/information-list-page/information-list-page.component';
import { MainComponent } from './components/information-management/main/main.component';
import { InformationEditPageComponent } from './components/information-management/information-edit-page/information-edit-page.component';
import { LoginPageComponent } from './components/information-management/login-page/login-page.component';
import { HeaderComponent } from './components/information-management/main/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { SafeHtmlPipe } from './components/pipes/safe-html.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InformationManagementComponent,
    InformationListPageComponent,
    MainComponent,
    InformationEditPageComponent,
    LoginPageComponent,
    HeaderComponent,
    SafeHtmlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
