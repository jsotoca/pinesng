import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {

  constructor(
    private domSanitizer:DomSanitizer
  ){}

  transform(value: string, ...args: unknown[]): SafeUrl {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(value);
  }

}
