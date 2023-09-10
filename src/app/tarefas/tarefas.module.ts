import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { TarefaService } from './shared'
import { ListarTarefaComponent } from './listar'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { CadastrarTarefaComponent } from './cadastrar/cadastrar-tarefa.component'
import { ReactiveFormsModule } from '@angular/forms'
import { EditarTarefaComponent } from './editar/editar-tarefa.component'
import { TarefaConcluidaDirective } from './shared/tarefa-concluida.directive'

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
  ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [TarefaService],
})
export class TarefasModule {}
