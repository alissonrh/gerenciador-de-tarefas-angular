import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Tarefa, TarefaService } from '../shared'

@Component({
  selector: 'app-editar-tarefa',
  templateUrl: './editar-tarefa.component.html',
  styleUrls: ['./editar-tarefa.component.css'],
})
export class EditarTarefaComponent implements OnInit {
  myForm: FormGroup
  tarefa: Tarefa
  constructor(
    private tarefaService: TarefaService,
    private router: Router,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {
    this.myForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5)]],
      descricao: [''],
    })
  }

  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params['id']
    this.tarefa = this.tarefaService.buscarPorId(id)

    this.myForm.valueChanges.subscribe((formValues) => {
      this.tarefa = { ...this.tarefa, ...formValues }
    })
  }

  atualizar(): void {
    if (this.myForm.valid) {
      this.tarefaService.atualizar(this.tarefa)
      this.router.navigate(['/tarefas'])
    }
  }

  voltar(): void {
    this.router.navigate(['/tarefas'])
  }
}
