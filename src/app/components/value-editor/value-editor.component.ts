import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-value-editor',
  templateUrl: './value-editor.component.html',
  styleUrls: ['./value-editor.component.css']
})
export class ValueEditorComponent implements OnInit {

  private _value: number = 10;
  @Input() get value(): number {
    return this._value;
  }

  set value(val: number) {
    this._value = val;
    this.valueChange.next(this._value);
  }

  @Output() valueChange = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit(): void {
  }

}
