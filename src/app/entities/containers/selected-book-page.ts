import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../reducers';
import * as collection from '../actions/entity.collection.actions';
import { Entity } from '../models/entity';

@Component({
  selector: 'bc-selected-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `,
})
export class SelectedBookPageComponent {
  book$: Observable<Entity>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(private store: Store<fromBooks.State>) {
    console.log('{ SelectedBookPageComponent } constructor');
    this.book$ = store.select(fromBooks.getSelectedBook);
    this.isSelectedBookInCollection$ = store.select(
      fromBooks.isSelectedBookInCollection
    );
  }

  addToCollection(book: Entity) {
    this.store.dispatch(new collection.AddBookAction(book));
  }

  removeFromCollection(book: Entity) {
    this.store.dispatch(new collection.RemoveBookAction(book));
  }
}
