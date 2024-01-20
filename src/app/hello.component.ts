import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-hello',
  template: `
    <h2>Hello there!</h2>
    <h3>Your name: {{ user.name }}</h3>
    <p>Your name: {{ user.age }}</p>
    <button (click)="showInfo()">Click me!</button>

    <div *ngIf="user.age >= 13; else noPG13">Bạn có thể xem nội dung PG-13</div>
    <ng-template #noPG13>
      <div>Bạn không thể xem nội dung PG-13</div>
    </ng-template>
    <!-- it nguoi dung -->
    <ng-template [ngIf]="user.age >= 26" [ngIfElse]="noPG13">
      <div>Bạn có thể xem nội dung PG-13</div>
    </ng-template>

    <div *ngFor="let author of authors; index as idx; count as total, last as last">
      {{ author.id }} - {{ author.firstName }} {{ author.lastName }} {{ idx }}
      {{ total }} {{last}}
      <ng-template [ngIf]="last"> More code </ng-template>
    </div>
    <div *ngFor="let x of authors">
      <ng-template [ngIf]="x.id == 1"> More code </ng-template>
    </div>
    <!-- 2-way binding -->
    <input type="text" [(ngModel)]="user.name" />
    <!-- 1-way binding -->
    <input type="text" [value]="user.name" />
  `,
})
export class HelloComponent {
  user = {
    name: 'KhanhDTB',
    age: 25,
  };
  showInfo() {
    alert(this.user.name + this.user.age);
  }
  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
    // more data
  ];
  @Input() item = '';
}
