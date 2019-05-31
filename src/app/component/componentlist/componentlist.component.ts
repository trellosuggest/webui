import { Component, OnInit, Input } from '@angular/core';
import { BaseModel } from 'src/app/model/base-model';

@Component({
  selector: 'app-componentlist',
  templateUrl: './componentlist.component.html',
  styleUrls: ['./componentlist.component.scss']
})
export class ComponentlistComponent<T extends BaseModel> implements OnInit {

  @Input()
  models: T[];

  constructor() { }

  ngOnInit() {
  }

}
