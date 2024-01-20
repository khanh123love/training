import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit, OnChanges {
  @Input() checked = true;
  @Output() checkedChange = new EventEmitter<boolean>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.checked) {
      console.log(this.checked);
    }
  }
  ngOnInit() {}
  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
