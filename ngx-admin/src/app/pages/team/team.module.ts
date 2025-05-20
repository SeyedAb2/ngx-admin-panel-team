import { NgModule } from '@angular/core';

import { TeamComponent } from './team.component';
import { TeamTreeComponent } from './component/team-tree/team-tree.component';
import { CommonModule } from '@angular/common';
import { TeamRoutingModule } from './team-routing.module';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { ThemeModule } from '../../@theme/theme.module';


@NgModule({
  imports: [
    CommonModule,
    TeamRoutingModule,
    NbIconModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    ThemeModule,
  ],
  declarations: [
    TeamComponent,
    TeamTreeComponent,
  ], 
})
export class TeamModule { }
