import {Card} from './card';

export interface User {
  id: string;
  avatarUrl: string;
  fullName: string;
  username: string;
  url: string;
  roles: any[];

  cards: Card[];
}
