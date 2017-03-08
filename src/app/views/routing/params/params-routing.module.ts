import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParamsComponent } from './params.component';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';

const routes: Routes = [{
   path: '',
  component: ParamsComponent,
  children:[{
    path: '',
    redirectTo: 'route1',
    pathMatch: 'full'
  }, {
    path: 'route1',
    component: Route1Component
  }, {
    path: 'route2',
    component: Route2Component
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ParamsRoutingModule { }
