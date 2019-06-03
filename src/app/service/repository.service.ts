import { Injectable } from '@angular/core';
import {User} from '../model/user';
import {List} from '../model/list';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  public Members: User[];

  public Lists: List[];

  constructor() { }
}
