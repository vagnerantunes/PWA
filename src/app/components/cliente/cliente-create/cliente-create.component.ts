import { Cliente } from './../cliente.model';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.css']
})
export class ClienteCreateComponent implements OnInit {

  cliente: Cliente = {
    cliNome: '',
    cliTipo: '',
    cliCpfCnpj: '',
    cliDataNascimento: '',
    cliContato: '',
    cliEmail: '',
    cliRazaoSocial: '',
    cliNomeFantasia: '',
    cliEndereco: '',
    cliSegmento: '',
    cliFlag: ''
  }

  constructor(private clienteService: ClienteService,
    private router: Router) { }
  
  ngOnInit(): void {    
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(() => {
      this.clienteService.showMessage('Cliente criado!')
      this.router.navigate(['/clientes'])
    })
  }

  cancel(): void {
    this.router.navigate(['/clientes'])
  } 
}
