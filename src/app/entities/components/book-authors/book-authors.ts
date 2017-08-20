import { Component, Input } from '@angular/core';

import { Entity } from '../../models/entity';

@Component({
  selector: 'bc-book-authors',
  template: `
    <h5 md-subheader>Written By:</h5>
    <span>
      {{ authors | bcAddCommas }}
    </span>
  `,
  styles: [
    `
    h5 {
      margin-bottom: 5px;
    }
  `,
  ],
})
export class BookAuthorsComponent {
  @Input() book: Entity;

  get authors() {
    return this.book.volumeInfo.authors;
  }
}
