import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss']
})
export class ChipComponent implements OnInit {

  @Input() size: string = 'normal';
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  emitDelete(): void {
    this.delete.emit();
  }

}
