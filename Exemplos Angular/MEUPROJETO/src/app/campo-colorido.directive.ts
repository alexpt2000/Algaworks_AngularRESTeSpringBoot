import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  @HostBinding('style.backgroundColor') corDeFundo: string;



  @HostListener('focus') aoGanharFocu() {
    this.corDeFundo = 'yellow';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('blur') onPerderFocu() {
    this.corDeFundo = 'transparent';
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
