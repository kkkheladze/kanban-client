import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'kb-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() disabled: boolean = false;
}
