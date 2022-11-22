import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/template/login-auth/account/login/login.component';
import { AuthGuard } from './components/template/login-auth/account/shared/auth.guard';
import { AuthenticationComponent } from './components/template/login-auth/layout/authentication/authentication.component';
import { RedirecionarComponent } from './components/template/login-auth/redirecionar/redirecionar.component';
import { HomeComponent } from './views/home/home.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';

const routes: Routes = [
  {
    path: '',
    component: RedirecionarComponent,
    children: [      
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "usuarios",
        component: UsuarioCrudComponent
      },
      {
        path: "usuarios/create",
        component: UsuarioCreateComponent
      },
      {
        path: "usuarios/update/:usuId",
        component: UsuarioUpdateComponent
      },
      {
        path: "usuarios/delete/:usuId",
        component: UsuarioDeleteComponent
      },
      {
        path: "pagamentos",
        component: FormaPagamentoCrudComponent
      },
      {
        path: "pagamentos/create",
        component: FormaPagamentoCreateComponent
      },
      {
        path: "pagamentos/update/:fpgId",
        component: FormaPagamentoUpdateComponent
      },
      {
        path: "pagamentos/delete/:fpgId",
        component: FormaPagamentoDeleteComponent
      },
      {
        path: "clientes",
        component: ClienteCrudComponent
      },
      {
        path: "clientes/create",
        component: ClienteCreateComponent
      },
      {
        path: "clientes/update/:cliId",
        component: ClienteUpdateComponent
      },
      {
        path: "clientes/delete/:cliId",
        component: ClienteDeleteComponent
      }
    ],
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
