import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class DropRolesService {

  constructor(private db: AngularFireDatabase) { }

  getRoles(){
    return this.db.list('/roles', {
      query: {
        orderByChild: 'nome'
      }
    });
  }
}
