import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../usuario.model';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuario-update',
  templateUrl: './usuario-update.component.html',
  styleUrls: ['./usuario-update.component.css']
})
export class UsuarioUpdateComponent implements OnInit {

  usuario!: Usuario;

  constructor(private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const usuId = this.route.snapshot.paramMap.get('usuId')
    this.usuarioService.readById(usuId!).subscribe((usuario: Usuario) => {
      this.usuario = usuario
    })
  }

  updateUsuario(): void {
    this.usuarioService.update(this.usuario).subscribe(() => {
      this.usuarioService.showMessage('Usuário atualizado com sucesso!')
      this.router.navigate(['/usuarios'])
    })
  }

  cancel(): void {
    this.router.navigate(['/usuarios'])
  }

  show: boolean = false;

  // click event function toggle
  password() {
    this.show = !this.show;
  }

}
