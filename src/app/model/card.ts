export class Card  {
  id: string;
  closed: boolean;
  idBoard: string;
  idList: string;
  name: string;
  due: string;
  idMembers: string[];
  story: number;

  constructor(id: string, name: string, id_board: string, id_list: string, due: string, id_members: string[], story: number) {
    this.id = id;
    this.name = name;
    this.closed = false;
    this.idBoard = id_board;
    this.idList = id_list;
    this.due = due;
    this.idMembers = id_members;
    this.story = story;
  }
}
