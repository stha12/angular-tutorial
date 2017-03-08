import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingRoutingModule } from './routing-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { ParamsModule } from './params/params.module';
import { HomeComponent } from './home/home.component';
import { GuardsComponent } from './guards/guards.component';
import { UserComponent } from './user/user.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingRoutingModule,
    SharedModule,
    ParamsModule
  ],
  declarations: [HomeComponent, GuardsComponent, UserComponent]
})
export class RoutingModules { }
