import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BookAuthorsComponent } from './book-authors';
import { EntityDetailComponent } from './entity-detail.component';
import { EntityComponent } from './entity.component';
import { EntityListComponent } from './entity-list.component';
import { BookSearchComponent } from './book-search';

import { PipesModule } from '../../shared/pipes';

export const COMPONENTS = [
  BookAuthorsComponent,
  EntityDetailComponent,
  EntityComponent,
  EntityListComponent,
  BookSearchComponent,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
    PipesModule,
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class ComponentsModule {}
