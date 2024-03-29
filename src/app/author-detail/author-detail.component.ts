import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../author-list/author-list.component';
// import { Author } from "../authors";

@Component({
  selector: 'app-author-detail',
  template: `
    <div *ngIf="author">
      <strong>{{ author.firstName }} {{ author.lastName }}</strong>
      <button (click)="handleDelete()">x</button>
    </div>
  `,
  // template: `./author-detail.component.html`,
  styles: [``],
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() { }

  ngOnInit(): void {
  }

  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
