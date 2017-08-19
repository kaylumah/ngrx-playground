import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { INCREMENT, DECREMENT, RESET } from './counter';

interface Card {
  id: number;
  title: string;
  description: string;
}

interface AppState {
  counter: number;
}

@Component({
  selector: 'MKG-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'MKG';

  public cards: Card[] = [];

  public counter: Observable<number>;

  constructor(private store: Store<AppState>/* private http: HttpClient */) {
    this.counter = store.select('counter');
  }

  public increment(): void {
    this.store.dispatch({ type: INCREMENT });
  }

  public decrement(): void {
    this.store.dispatch({ type: DECREMENT });
  }

  public reset(): void {
    this.store.dispatch({ type: RESET });
  }
  ngOnInit(): void {
    /* this.http.get<Card[]>('http://localhost:3000/api/cards').subscribe(data => {
      console.log('data', data);
      this.cards = data;
    }); */
  }
}
