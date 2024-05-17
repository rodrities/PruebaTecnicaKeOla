import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTareasComponent } from './pages/viewTareas/view-tareas/view-tareas.component';
import { CreateTareasComponent } from './pages/createTareas/create-tareas/create-tareas.component';
import { EditTareasComponent } from './pages/editTareas/edit-tareas/edit-tareas.component';

const routes: Routes = [
  {
    path: '',
    component: ViewTareasComponent,
  },
  {
    path: 'crear',
    component: CreateTareasComponent,
  },
  {
    path: 'editar/:id',
    component: EditTareasComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
