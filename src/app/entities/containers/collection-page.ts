import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../reducers';
import * as collection from '../actions/collection';
import { Entity } from '../models/entity';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <md-card>
      <md-card-title>Entities</md-card-title>
    </md-card>
    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
  /**
   * Container components are permitted to have just enough styles
   * to bring the view together. If the number of styles grow,
   * consider breaking them out into presentational
   * components.
   */
  styles: [
    `
    md-card-title {
      display: flex;
      justify-content: center;
    }
  `,
  ],
})
export class CollectionPageComponent implements OnInit {
  books$: Observable<Entity[]>;

  constructor(private store: Store<fromBooks.State>) {
    console.log('{ CollectionPageComponent } constructor');
    this.books$ = store.select(fromBooks.getBookCollection);
  }

  ngOnInit() {
    console.log('{ CollectionPageComponent } oninit');
    this.store.dispatch(new collection.LoadAction());
  }
}
