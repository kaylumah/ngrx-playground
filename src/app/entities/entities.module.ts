import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ComponentsModule } from './components';
import { BookEffects } from './effects/book';
import { EntityCollectionEffects } from './effects/entity.collection.effects';
import { EntityExistsGuard } from './guards/entity-exists';

import { FindBookPageComponent, ViewBookPageComponent, SelectedBookPageComponent, CollectionPageComponent} from './containers';

import { reducers } from './reducers';
import { EntityService } from './services/entity.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    RouterModule.forChild([
      { path: 'find', component: FindBookPageComponent },
      {
        path: ':id',
        component: ViewBookPageComponent,
        canActivate: [EntityExistsGuard],
      },
      { path: '', component: CollectionPageComponent },
    ]),

    /**
     * StoreModule.forFeature is used for composing state
     * from feature modules. These modules can be loaded
     * eagerly or lazily and will be dynamically added to
     * the existing state.
     */
    StoreModule.forFeature('books', reducers),

    /**
     * Effects.forFeature is used to register effects
     * from feature modules. Effects can be loaded
     * eagerly or lazily and will be started immediately.
     *
     * All Effects will only be instantiated once regardless of
     * whether they are registered once or multiple times.
     */
    EffectsModule.forFeature([BookEffects, EntityCollectionEffects]),
  ],
  declarations: [
    FindBookPageComponent,
    ViewBookPageComponent,
    SelectedBookPageComponent,
    CollectionPageComponent,
  ],
  providers: [EntityExistsGuard, EntityService],
})
export class EntitiesModule {}
