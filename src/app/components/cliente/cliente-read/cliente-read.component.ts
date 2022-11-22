import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente.model';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-read',
  templateUrl: './cliente-read.component.html',
  styleUrls: ['./cliente-read.component.css']
})
export class ClienteReadComponent implements OnInit {

  clientes!: Cliente[]
  displayedColumns = ['cliId', 'cliNome', 'cliTipo', 'cliCpfCnpj', 'cliDataNascimento', 'cliContato', 'cliEmail', 'cliRazaoSocial', 'cliNomeFantasia', 'cliEndereco', 'cliSegmento', 'cliFlag', 'acao']

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.read().subscribe(clientes => {
      this.clientes = clientes
      console.log(clientes)  
    })
  }
  

}
