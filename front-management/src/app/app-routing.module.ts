import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformationListPageComponent } from './components/information-management/information-list-page/information-list-page.component'
import { InformationEditPageComponent } from './components/information-management/information-edit-page/information-edit-page.component'
import { HelpListPageComponent } from './components/settings-list/help-list-page/help-list-page.component';
import { StatuteListPageComponent } from './components/settings-list/statute-list-page/statute-list-page.component';
import { PrivacyListPageComponent } from './components/settings-list/privacy-list-page/privacy-list-page.component';
import { ProductsComponent } from './components/settings-list/products/products.component';

const routes: Routes = [
  {
    path: '',
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
      {
        path: 'help',
        component: HelpListPageComponent,
      },
      {
        path: 'statute',
        component: StatuteListPageComponent,
      },
      {
        path: 'privacy',
        component: PrivacyListPageComponent,
      },
      
      {
        path: 'products',
        component: ProductsComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
  
export class AppRoutingModule { }
