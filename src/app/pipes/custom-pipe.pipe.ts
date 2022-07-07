import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(cardNumber: string): string {
    return cardNumber.replace(/\s+/g, '').replace(/(\d{4})/g, ' $1 ').trim();
  }
}
