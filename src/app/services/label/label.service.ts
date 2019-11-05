import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  getLabel(): string {
    return 'Label has changed !';
  }
}
