import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/modules/shared.module';

import { PagesRoutingModule } from './pages-routing.module';
import { UsersListModule } from './users-list/users-list.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [PagesComponent],
  imports: [CommonModule, PagesRoutingModule, SharedModule, UsersListModule],
})
export class PagesModule {}
