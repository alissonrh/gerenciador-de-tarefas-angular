import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

import { TarefaService, Tarefa } from '../shared'

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css'],
})
export class CadastrarTarefaComponent {
  myForm: FormGroup
  tarefa: Tarefa

  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.myForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      descricao: [''],
    })
  }

  cadastrar(): void {
    if (this.myForm.valid) {
      this.tarefa = new Tarefa(
        0,
        this.myForm.value.nome,
        this.myForm.value.descricao,
        new Date(),
        false
      )
      this.tarefaService.cadastrar(this.tarefa)
      this.router.navigate(['/tarefas'])
    }
  }

  voltar(): void {
    this.router.navigate(['/tarefas'])
  }
}
