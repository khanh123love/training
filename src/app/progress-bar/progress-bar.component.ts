import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: "app-progress-bar",
  template: `
    <div
      class="progress-bar-container"
      [style.backgroundColor]="backgroundColor"
    >
      <div
        class="progress"
        [style]="{
          backgroundColor: progressColor,
          width: progress + '%'
        }"
      ></div>
    </div>
  `,
  styles: [
    `
      .progress-bar-container,
      .progress {
        height: 20px;
      }
      .progress-bar-container {
        width: 100%;
      }
    `,
  ],
})
export class ProgressBarComponent implements OnInit {
  // khai bao property ten progress
  @Input() progress = 0;
  @Input() backgroundColor: string | undefined;
  @Input() progressColor: string | undefined;
  
  //La ham tao class, khi khoi tao 1 instance cua class thi se tu dong chay, chi chay 1 lan duy nhat
  constructor() { }

  //Ham nay se chay lai moi khi co 1 input bi thay doi (TH k thich dung ngOnChanges thi co the dung getter setter)
  // hoi a xoai loi SimpleChanges (Bai 5)
  ngOnChanges(changes: any) {
    if ("progress" in changes) {
      if (typeof changes["progress"].currentValue !== "number") {
        const progress = Number(changes["progress"].currentValue);
        if (Number.isNaN(progress)) {
          this.progress = 0;
        } else {
          this.progress = progress;
        }
      }
    }
  }

  //la life method cua angular, dc tu dong goi khi component dc khoi tao
  ngOnInit(): void {
  }

}
