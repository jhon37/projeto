import { Component, OnInit } from '@angular/core';
import { DropRolesService } from '../../../drop-roles.service';
import { SalvarRoleService } from '../../../salvar-role.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-novo-role',
  templateUrl: './novo-role.component.html',
  styleUrls: ['./novo-role.component.css']
})
export class NovoRoleComponent implements OnInit {
  roles$;
  rol = {};
  id;
  constructor(private router: Router, private route: ActivatedRoute,
    private SalvarRoleService: SalvarRoleService) { 
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) { 
      this.SalvarRoleService.getRol(this.id).take(1).subscribe(r => this.rol = r);
    }
  }

  salvar(rol){
    if(this.id) this.SalvarRoleService.update(this.id, rol);
    else this.SalvarRoleService.crear(rol);

    this.router.navigate(['admin/roles']);
  }

  delete(){
    if (confirm('Tem a certeza de eliminar o rol?')){
      this.SalvarRoleService.delete(this.id);

      this.router.navigate(['admin/roles']);
    }
  }

  ngOnInit() {
  }

}
