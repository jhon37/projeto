import { Component, OnInit, OnDestroy } from '@angular/core';
import { SalvarUsuarioService } from '../../salvar-usuario.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnDestroy {
  usuarios: {nome: string}[];
  usuariosfil: any[];
  subscription: Subscription;
  tableResourse: DataTableResource<any>;
  items: any[];
  itemCount: number;

  constructor(private SalvarUsuarioService: SalvarUsuarioService) { 
    this.subscription = this.SalvarUsuarioService.getAll()
    .subscribe(usuarios => {
      this.usuariosfil = this.usuarios = usuarios;
      this.initializeTable(usuarios);
    })
  }

  private initializeTable(usuarios: any[]){
    this.tableResourse = new DataTableResource(usuarios);
    this.tableResourse.query({offset: 0}).then(items => this.items = items);
    this.tableResourse.count().then(count => this.itemCount = count);
  }

  reloadItems(params){
    if (!this.tableResourse) return;
    this.tableResourse.query(params).then(items => this.items = items);
  }

  buscar(query: string){
    this.usuariosfil = (query) ?
      this.usuarios.filter(u => u.nome.toLowerCase().includes(query.toLowerCase())): this.usuarios
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  ngOnInit() {
  }

}
