import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getData() {
    return [
      { id: 1, name: 'Nanna' },
      { id: 2, name: 'Minnu' },
      { id: 3, name: 'Kavya' }, 
    ];
  }
}