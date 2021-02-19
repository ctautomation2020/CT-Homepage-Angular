import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'safeUrl'
})
export class AcademicsPipe implements PipeTransform {

    constructor(private sanitizer:DomSanitizer){ }
    transform(value: string) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }

}
