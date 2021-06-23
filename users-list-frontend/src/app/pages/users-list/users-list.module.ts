import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/modules/shared.module';

import { UsersListComponent } from './users-list.component';
import { DetailsPopupComponent } from './details-popup/details-popup.component';

@NgModule({
  declarations: [UsersListComponent, DetailsPopupComponent],
  imports: [CommonModule, SharedModule],
})
export class UsersListModule {}
