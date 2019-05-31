import { BaseModel } from './base-model';

export class Board extends BaseModel {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    super();
    this.id = id;
    this.name = name;
  }

  propsToPrint(): string[] {
    return [this.id, this.name];
  }
}
