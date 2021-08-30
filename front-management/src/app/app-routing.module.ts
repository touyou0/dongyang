import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationListPageComponent } from './components/information-management/information-list-page/information-list-page.component'
import { InformationEditPageComponent } from './components/information-management/information-edit-page/information-edit-page.component'
import { LoginPageComponent } from './components/information-management/login-page/login-page.component';
import { MainComponent } from './components/information-management/main/main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'information',
        component: InformationListPageComponent,
      },
      {
        path: 'information/edit',
        component: InformationEditPageComponent,
      },
      {
        path: 'information/edit/:id',
        component: InformationEditPageComponent,
      },
      { path: 'login', component: LoginPageComponent },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
