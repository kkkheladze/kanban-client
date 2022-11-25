import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [InputComponent, CardComponent, ButtonComponent],
  imports: [CommonModule],
  exports: [CardComponent, InputComponent, ButtonComponent],
})
export class SharedModule {}
