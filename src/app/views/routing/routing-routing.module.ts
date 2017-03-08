import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GuardsComponent } from './guards/guards.component';
import { UserComponent } from './user/user.component';
import { Route1Component } from './params/route1/route1.component';
import { Route2Component } from './params/route2/route2.component';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children:[{
    path: '',
    redirectTo: 'guards',
    pathMatch: 'full'
  }, {
    path: 'guards',
    component: GuardsComponent
  }, {
    path: 'params',
    loadChildren: './params/params.module#ParamsModule'
   /* children: [{
      path: 'route1',
      component: Route1Component
    },{
    path: 'route2',
    component: Route2Component
  }]*/
  },{
    path: 'user',
    component: UserComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class RoutingRoutingModule { }
