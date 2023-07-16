import { Component, OnInit } from '@angular/core'
import { TarefaService } from '../shared'

@Component({
  selector: 'app-listar-tarefa',
  templateUrl: './listar-tarefa.component.html',
  styleUrls: ['./listar-tarefa.component.css'],
})
export class ListarTarefaComponent implements OnInit {
  constructor(public tarefaService: TarefaService) {}

  ngOnInit(): void {}
}
