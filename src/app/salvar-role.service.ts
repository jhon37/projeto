import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SalvarRoleService {

  constructor(private db: AngularFireDatabase) { }

  crear(rol){
    return this.db.list('/roles').push(rol);
  }

  getAll(){
    return this.db.list('/roles');
  }

  getRol(rolId){
    return this.db.object('/roles/' + rolId);
  }

  update(rolId, rol){
    return this.db.object('/roles/' + rolId).update(rol);
  }

  delete(rolId){
    return this.db.object('/roles/' + rolId).remove();
  }

}
