import { BaseModel } from './base-model';

export class Board extends BaseModel {
  id: string;
  name: string;
  prefs: {
    backgroundImageScaled: {
      width: number,
      height: number,
      url: string
    }[]
  };

  constructor(id: string, name: string, URL: string) {
    super();
    this.id = id;
    this.name = name;
    this.prefs = {
      backgroundImageScaled: [{
        width: 140,
        height: 100,
        url: URL
      }]
    };
  }

  propsToPrint(): string[] {
    return [this.id, this.name];
  }
}
