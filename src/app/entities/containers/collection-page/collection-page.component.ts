import 'rxjs/add/operator/let';
import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromBooks from '../../reducers';
import * as collection from '../../actions/entity.collection.actions';
import { Entity } from '../../models/entity';

@Component({
  selector: 'bc-collection-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.scss']
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
