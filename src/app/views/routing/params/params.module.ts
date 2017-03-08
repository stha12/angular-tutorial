import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParamsRoutingModule } from './params-routing.module';
import { Route1Component } from './route1/route1.component';
import { Route2Component } from './route2/route2.component';
import { ParamsComponent } from './params.component';

@NgModule({
  imports: [
    CommonModule,
    ParamsRoutingModule
  ],
  declarations: [Route1Component, Route2Component, ParamsComponent],
  exports:[
    Route1Component,
    Route2Component
  ]
})
export class ParamsModule { }