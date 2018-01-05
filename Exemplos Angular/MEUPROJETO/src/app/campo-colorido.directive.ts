import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') aoGanharFocu() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') onPerderFocu() {
    this.corDeFundo = 'transparent';
  }

}
