import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { UsersComponent } from './admin/users/users.component';
import { RolesComponent } from './admin/roles/roles.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './auth.service';
import { AuthProtectService } from './auth-protect.service';
import { UserService } from './user.service';
import { NovoUserComponent } from './admin/users/novo-user/novo-user.component';
import { NovoRoleComponent } from './admin/roles/novo-role/novo-role.component';
import { DropRolesService } from './drop-roles.service';
import { FormsModule } from '@angular/forms';
import { SalvarUsuarioService } from './salvar-usuario.service';
import { DataTableModule } from 'angular5-data-table';
import { SalvarRoleService } from './salvar-role.service';
@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    UsersComponent,
    RolesComponent,
    LoginComponent,
    HomeComponent,
    EmailComponent,
    SignupComponent,
    MenuComponent,
    NovoUserComponent,
    NovoRoleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    DataTableModule,
    RouterModule.forRoot([
      {path: 'admin/users/novo-user', component: NovoUserComponent, canActivate: [AuthProtectService]},
      {path: 'admin/users/novo-user/:id', component: NovoUserComponent, canActivate: [AuthProtectService]},
      {path: 'admin/users', component: UsersComponent, canActivate: [AuthProtectService]},
      {path: 'admin/roles', component: RolesComponent, canActivate: [AuthProtectService]},
      {path: 'admin/roles/novo-role', component: NovoRoleComponent, canActivate: [AuthProtectService]},
      {path: 'admin/roles/novo-role/:id', component: NovoRoleComponent, canActivate: [AuthProtectService]},
      {path: 'login', component: LoginComponent},
      {path: 'home', component: HomeComponent}      
    ])   
  ],
  providers: [
    AuthService,
    AuthProtectService,
    UserService,
    DropRolesService,
    SalvarUsuarioService,
    SalvarRoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
