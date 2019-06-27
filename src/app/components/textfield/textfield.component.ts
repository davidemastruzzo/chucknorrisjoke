import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.scss']
})
export class TextfieldComponent implements OnInit, AfterViewInit {

  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() centerText: boolean = false;
  @Input() value: string = '';
  @Input() autofocus: boolean = false;
  @Output() valueChange = new EventEmitter();

  public input: any;

  constructor() { }

  ngOnInit() {
    if (this.id === '') {
      this.id = this.uid();
    }
  }

  ngAfterViewInit(): void {
    this.input = document.getElementById(this.id);
  }

  changeValue() {
    this.valueChange.emit(this.value);
  }

  uid() {
    return Math.random()
      .toString(36)
      .slice(4);
  }
}
