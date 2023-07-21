import { Component } from '@angular/core';
import firmConfig from "../../../metadata.json";
import { Section } from '../interface/firmConfig';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent {
  firmData:Array<Section> | null = null;
  constructor() {
    this.initFirmData()
  }
 
  initFirmData() {
    this.firmData = this.sortArrayByKey([...firmConfig.modal], 'order');
  }

  //sort a array of object by key
  sortArrayByKey(array:Array<any>, key:string) {
    return array.sort((a, b) => {
      let x = a[key];
      let y = b[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
  }
}
