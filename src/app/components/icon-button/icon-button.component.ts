import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.scss']
})
export class IconButtonComponent implements OnInit {

  @Input() color: string;
  @Input() type: string = 'button';
  @Input() id: string = '';
  @Input() disabled: boolean = false;

  get _disabled(): boolean {
    return this.disabled;
  }

  constructor() { }

  ngOnInit() {
  }

}
