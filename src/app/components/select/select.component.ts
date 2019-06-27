import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style([{
          opacity: 0
        }]),
        animate('0.15s', style([{
          opacity: 1
        }]))
      ]),
      transition(':leave', [
        style([{
          opacity: 1
        }]),
        animate('0.15s', style([{
          opacity: 0
        }]))
      ])
    ])
  ]
})
export class SelectComponent implements OnInit {

  @Input() values: any[] = [];
  @Input() names: string[] = [];
  @Input() value: any;
  @Input() id: string;
  @Input() disabled: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() multipleChoice: boolean = false;

  @Output() valueChange = new EventEmitter();

  @ViewChild('input') private input: ElementRef;

  private focusValue: any;
  showDropdown = false;

  @HostListener('document:click', ['$event'])
  onClickOutsideComponent($event: any) {
    if (!this.eRef.nativeElement.contains($event.target)) {
      if (this.showDropdown) {
        this.hideDropdown();
      }
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown($event: any) {
    if (this.showDropdown) {
      switch ($event.key) {
        case 'Enter':
          this.selectOption(this.getNameByValue(this.focusValue));
          break;
        case 'Escape':
          this.hideDropdown();
          break;
        case 'ArrowUp':
          $event.preventDefault();
          this.lastValue();
          break;
        case 'ArrowDown':
          $event.preventDefault();
          this.nextValue();
          break;
      }
    }
  }

  constructor(private eRef: ElementRef) {
  }

  ngOnInit() {
  }

  hideDropdown() {
    this.showDropdown = false;
    this.input.nativeElement.blur();
  }

  selectOption(optionName: string) {
    const value = this.getValueByName(optionName);
    if (this.multipleChoice) {
      this.value.has(value) ? this.value.delete(value) : this.value.add(value);
    } else {
      this.focusValue = value;
      this.value = value;
      this.hideDropdown();
    }
    this.valueChange.emit(this.value);
  }

  nextValue() {
    const nextIndex = this.values.findIndex(value => {
      return value === this.focusValue;
    }) + 1;
    if (this.values.length > nextIndex) {
      this.focusValue = this.values[nextIndex];
    }
  }

  lastValue() {
    const lastIndex = this.values.findIndex(value => {
      return value === this.focusValue;
    }) - 1;
    if (lastIndex >= 0) {
      this.focusValue = this.values[lastIndex];
    }
  }

  getValueByName(optionName: string) {
    return this.values[this.names.findIndex(name => {
      return name === optionName;
    })];
  }

  getNameByValue(optionValue: string) {
    return this.names[this.values.findIndex(value => {
      return value === optionValue;
    })];
  }
}
