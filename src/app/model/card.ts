export class Card  {
  id: string;
  closed: boolean;
  id_board: string;
  id_list: string;
  name: string;
  due: string;
  id_members: string[];
  story: number;

  constructor(id: string, name: string, id_board: string, id_list: string, due: string, id_members: string[], story: number) {
    this.id = id;
    this.name = name;
    this.closed = false;
    this.id_board = id_board;
    this.id_list = id_list;
    this.due = due;
    this.id_members = id_members;
    this.story = story;
  }
}
