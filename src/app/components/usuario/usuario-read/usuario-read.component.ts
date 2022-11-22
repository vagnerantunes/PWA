import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-read',
  templateUrl: './usuario-read.component.html',
  styleUrls: ['./usuario-read.component.css']
})

export class UsuarioReadComponent implements OnInit {

  usuarios!: Usuario[]
  displayedColumns = ['usuId', 'usuNome', 'usuSenha', 'usuFlag', 'acao']

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.read().subscribe(usuarios => {
      this.usuarios = usuarios
      console.log(usuarios)  
    })
  }

}