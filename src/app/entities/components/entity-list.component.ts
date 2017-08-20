import { Component, Input } from '@angular/core';
import { Entity } from '../models/entity';

@Component({
  selector: 'bc-book-preview-list',
  template: `
    <h1> Entity List </h1>
    <bc-book-preview *ngFor="let book of books" [book]="book"></bc-book-preview>
  `,
  styles: [
    `
    :host {
      background-color: seagreen;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  `,
  ],
})
export class EntityListComponent {
  @Input() books: Entity[];
}
