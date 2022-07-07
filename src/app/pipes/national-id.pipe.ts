import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nationalId'
})
export class NationalIdPipe implements PipeTransform {

  nationalDay: any = '';
  nationalMonth: any = '';
  nationalYear: any = '';
  date: Date = new Date('short');

  transform(value: string): Date {
    let split = value.split("");
    this.nationalDay = split[5] + split[6];
    this.nationalMonth = split[3] + split[4];
    this.nationalYear = split[1] + split[2];

    this.date = new Date(this.nationalYear, this.nationalMonth - 1, this.nationalDay);

    return this.date;
  }

}
