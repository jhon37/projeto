import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class SalvarUsuarioService {

  constructor(private db: AngularFireDatabase) { }

  crear(usuario){
    return this.db.list('/usuarios').push(usuario);
  }

  getAll(){
    return this.db.list('/usuarios');
  }

  getUser(userId){
    return this.db.object('/usuarios/' + userId);
  }

  update(userId, usuario){
    return this.db.object('/usuarios/' + userId).update(usuario);
  }

  delete(userId){
    return this.db.object('/usuarios/' + userId).remove();
  }

}
