import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SmartPhoneComponent } from './components/smart-phone/smart-phone.component'
import { AppComponent } from './app.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'homepage',
    pathMatch: 'full'
  },
  {
    path: 'mobilesList',
    component: SmartPhoneComponent
  }
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
