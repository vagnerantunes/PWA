import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//material
import {MatNativeDateModule} from '@angular/material/core'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/template/login-auth/account/login/login.component';
import { HomeLoginComponent } from './components/template/login-auth/layout/home-login/home-login.component';
import { AuthenticationComponent } from './components/template/login-auth/layout/authentication/authentication.component';
import { HeaderComponent } from './components/template/header/header.component';
import { NavInicialComponent } from './components/template/nav-inicial/nav-inicial.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { RedirecionarComponent } from './components/template/login-auth/redirecionar/redirecionar.component';
import { UsuarioCreateComponent } from './components/usuario/usuario-create/usuario-create.component';
import { UsuarioReadComponent } from './components/usuario/usuario-read/usuario-read.component';
import { UsuarioUpdateComponent } from './components/usuario/usuario-update/usuario-update.component';
import { UsuarioDeleteComponent } from './components/usuario/usuario-delete/usuario-delete.component';
import { UsuarioCrudComponent } from './views/usuario-crud/usuario-crud.component';
import { HomeComponent } from './views/home/home.component';
import { FormaPagamentoCrudComponent } from './views/forma-pagamento-crud/forma-pagamento-crud.component';
import { FormaPagamentoCreateComponent } from './components/formaPagamento/forma-pagamento-create/forma-pagamento-create.component';
import { FormaPagamentoReadComponent } from './components/formaPagamento/forma-pagamento-read/forma-pagamento-read.component';
import { FormaPagamentoUpdateComponent } from './components/formaPagamento/forma-pagamento-update/forma-pagamento-update.component';
import { FormaPagamentoDeleteComponent } from './components/formaPagamento/forma-pagamento-delete/forma-pagamento-delete.component';
import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteReadComponent } from './components/cliente/cliente-read/cliente-read.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { NavComponent } from './components/template/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeLoginComponent,
    AuthenticationComponent,
    HeaderComponent,
    NavInicialComponent,
    FooterComponent,
    RedirecionarComponent,
    UsuarioCreateComponent,
    UsuarioReadComponent,
    UsuarioUpdateComponent,
    UsuarioDeleteComponent,
    UsuarioCrudComponent,
    HomeComponent,
    FormaPagamentoCrudComponent,
    FormaPagamentoCreateComponent,
    FormaPagamentoReadComponent,
    FormaPagamentoUpdateComponent,
    FormaPagamentoDeleteComponent,
    ClienteCrudComponent,
    ClienteCreateComponent,
    ClienteReadComponent,
    ClienteUpdateComponent,
    ClienteDeleteComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    HttpClientModule,
    MatPaginatorModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
