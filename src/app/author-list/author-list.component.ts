import { Component, OnInit } from '@angular/core';
// import { authors } from "../authors";

@Component({
  selector: 'app-author-list',
  template: `./author-list.component.html`,
  // template: ``,
  styles: [``],
})
export class AuthorListComponent implements OnInit {
  authors: Author[] = [
    {
        id: 0,
        firstName: 'string',
        lastName: 'string',
        email: 'string',
        gender: 'string',
        ipAddress: 'string',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  handleDelete(author: Author) {
    this.authors = this.authors.filter((item) => item.id !== author.id);
  }
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  ipAddress: string;
}
