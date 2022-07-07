import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstDemoService {

  constructor() { }
  public getValue(){
    return 'Sample value';
  }

}
