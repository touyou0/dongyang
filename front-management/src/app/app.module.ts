import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformationManagementComponent } from './components/information-management/information-management.component';
import { InformationListPageComponent } from './components/information-management/information-list-page/information-list-page.component';
import { MainComponent } from './components/information-management/main/main.component';
//import { ModelServiceComponent } from './components/core/model-services/information-model.service';

@NgModule({
  declarations: [
    AppComponent,
    InformationManagementComponent,
    InformationListPageComponent,
    MainComponent,

    //ModelServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
