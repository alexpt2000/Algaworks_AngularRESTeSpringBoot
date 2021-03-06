import { Directive, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]',
  exportAs: 'campoColorido'
})
export class CampoColoridoDirective {

  // tslint:disable-next-line:no-input-rename
  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') corDeFundo: string;

  @HostListener('focus') colorir() {
    this.corDeFundo = this.cor;
  }

  @HostListener('blur') descolorir() {
    this.corDeFundo = 'transparent';
  }

}
