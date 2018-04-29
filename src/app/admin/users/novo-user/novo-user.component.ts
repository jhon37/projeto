import { Component, OnInit } from '@angular/core';
import { DropRolesService } from '../../../drop-roles.service';
import { SalvarUsuarioService } from '../../../salvar-usuario.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-novo-user',
  templateUrl: './novo-user.component.html',
  styleUrls: ['./novo-user.component.css']
})
export class NovoUserComponent implements OnInit {
  roles$;
  usuario = {};
  id;
  constructor(private router: Router, private route: ActivatedRoute,  DropRolesService: DropRolesService, private SalvarUsuarioService: SalvarUsuarioService) { 
    this.roles$ = DropRolesService.getRoles();
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { 
      this.SalvarUsuarioService.getUser(this.id).take(1).subscribe(u => this.usuario = u);
    }
  }

  salvar(usuario){
    if(this.id) this.SalvarUsuarioService.update(this.id, usuario);
    else this.SalvarUsuarioService.crear(usuario);

    this.router.navigate(['admin/users']);
  }

  delete(){
    if (confirm('Tem a certeza de eliminar o usuario?')){
      this.SalvarUsuarioService.delete(this.id);

      this.router.navigate(['admin/users']);
    }
  }

  ngOnInit() {
  }

}
