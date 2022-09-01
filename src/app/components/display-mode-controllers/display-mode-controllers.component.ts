import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DisplayModeControllers } from './display-mode-controllers';

@Component({
  selector: 'display-mode-controllers',
  templateUrl: './display-mode-controllers.component.html',
  styles: [],
})
export class DisplayModeControllersComponent {
  @Input() controllers: Array<DisplayModeControllers> = [];
  @Output() onChangeDisplay = new EventEmitter();

  onChangeDisplayMode(display: string) {
    this.onChangeDisplay.emit(display);
  }
}
