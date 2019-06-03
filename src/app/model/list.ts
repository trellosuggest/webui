export class List {
  id: string;
  name: string;
  id_board: string;
  isIgnored: boolean;

  constructor(id: string, name: string, id_board: string, isIgnored: boolean = false) {
    this.id = id;
    this.name = name;
    this.id_board = id_board;
    this.isIgnored = isIgnored;
  }
}
