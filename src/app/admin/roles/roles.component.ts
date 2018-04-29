import { Component, OnInit, OnDestroy } from '@angular/core';
import { SalvarRoleService } from '../../salvar-role.service';
import { Subscription } from 'rxjs/Subscription';
import { DataTableResource } from 'angular5-data-table';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit, OnDestroy {

  usuarios: {nome: string}[];
  usuariosfil: any[];
  subscription: Subscription;
  tableResourse: DataTableResource<any>;
  items: any[];
  itemCount: number;

  constructor(private SalvarRoleService: SalvarRoleService) { 
    this.subscription = this.SalvarRoleService.getAll()
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
