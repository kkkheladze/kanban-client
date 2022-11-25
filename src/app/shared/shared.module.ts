import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/input/input.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [InputComponent, CardComponent],
  imports: [CommonModule],
  exports: [CardComponent, InputComponent],
})
export class SharedModule {}
