import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TokenGenComponent } from './pages/token-gen/token-gen.component';


const routes: Routes = [{
  path: '',
  redirectTo: '/tokenGen',
  pathMatch: 'full'
},{
  path: 'tokenGen',
  component: TokenGenComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
