import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'kb-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() type: string = 'text';
  @Input() abstractFormControl!: AbstractControl;

  public value: string = '';

  public changed!: (value: string) => void;

  public touched!: (value: string) => void;

  public isDisabled: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  get formControl(): FormControl {
    return this.abstractFormControl as FormControl;
  }

  // Control Value Accessor Logic
  onChanged(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.changed(value);
  }

  onTouched(event: Event) {
    const value = (<HTMLInputElement>event.target).value;
    this.touched(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
