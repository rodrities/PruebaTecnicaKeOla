import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/shared/models/Tarea/Tarea';

@Component({
  selector: 'app-view-tareas',
  templateUrl: './view-tareas.component.html',
  styleUrls: ['./view-tareas.component.css']
})

export class ViewTareasComponent implements OnInit{
  
  optionsEstado = [
    { label: 'Pendiente', value: 'pendiente' },
    { label: 'Completado', value: 'completado' }
];
optionsOrdenamiento = [
  { label: 'Prioridad', value: 'prioridad' },
  { label: 'F. Vencimiento', value: 'fecha' }
];
  tareas: Tarea[] = []
  tareasString!: any
  filterPrioridad = 0
  filterEstado = ''
  filterFecha!: Date 
  filteredTareas: Tarea[] = []
  orderBySelected = ''
  
  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.tareasString = localStorage.getItem('tareas')
    this.tareas = JSON.parse(this.tareasString)
    this.filteredTareas = this.tareas
  }

  public getPrioridad(prioridad: number) : any {
    // logica para obtener la clase de la prioridad 
    switch (prioridad) {
      case 1:
          return "p-button-danger p-button-outlined p-button-rounded p-button-sm"
      case 2:
          return "p-button-warning p-button-outlined p-button-rounded p-button-sm"
      case 3:
          return "p-button-success p-button-outlined p-button-rounded p-button-sm"
    }
  }
  public getEstado(estado: string) : any {
    // logica para obtener la clase del estado
    if (estado === 'completado') 
      return "p-button-rounded p-button-success p-button-sm disable"
    else 
      return "p-button-rounded p-button-success p-button-outlined p-button-sm"
    
  }

  public getPrioridadBadge(prioridad: number) : any {
    // logica para obtener la clase de la prioridad del badge
    switch (prioridad) {
      case 1:
          return "p-badge-danger"
      case 2:
          return "p-badge-warning"
      case 3:
          return "p-badge-success"
    }
  }

  public eliminarTarea(id: number) {
    // logica par eliminar tarea
    this.tareas = this.tareas.filter(tarea => tarea.id !== id); // se filtra la tarea por el id
    // se guarda la nueva lista en el almacenamiento local
    const miArregloString = JSON.stringify(this.tareas);
    localStorage.setItem('tareas', miArregloString);
    this.filteredTareas = this.tareas
  }

  public editarTarea(id: number) {
    // navegacion a la pantalla de edicion de tarea
    this.router.navigate(['edit'])
  }

  filterByPrioridad(selectedPrioridad: number) {
    // logica para filtrar la lista segun la prioridad
    if (selectedPrioridad === null) {
      // si es null (se deseleccionó) la lista de filtrado se reinicia
      this.filteredTareas = this.tareas
    } else 
    // Filtrar la lista filteredTareas por prioridad
    this.filteredTareas = this.tareas.filter(tarea => tarea.prioridad === selectedPrioridad);
  }

  filterByEstado(selectedEstado: string) {
    // logica para filtrar la lista segun el estado
    if (selectedEstado === null) {
       // si es null (se deseleccionó) la lista de filtrado se reinicia
      this.filteredTareas = this.tareas
    } else 
    // Filtrar el arreglo filteredTareas por el estado
    this.filteredTareas = this.tareas.filter(tarea => tarea.estado === selectedEstado);
  }

  filterByFecha(filterFecha: Date) {
    if (filterFecha) {
        // Obtener el día, mes y año de la fecha seleccionada
        const day = filterFecha.getDate().toString().padStart(2, '0');
        const month = (filterFecha.getMonth() + 1).toString().padStart(2, '0');
        const year = filterFecha.getFullYear().toString();

        // Crear la fecha en formato yyyy-mm-dd
        const formattedDate = year + '-' +month +'-'+ day;

        // Filtrar tareasFiltered por fechaVencimiento
        this.filteredTareas = this.tareas.filter(tarea => {
            // Obtener la fecha en formato yyyy-mm-dd
            const auxFecha = tarea.fechaVencimiento.toString().slice(0,10)
            return formattedDate == auxFecha;
        });
    } else {
        // Si no se selecciona ninguna fecha, mostrar todas las tareas sin filtrar
        this.filteredTareas = this.tareas;
    }
}

orderBy(sortBySelected: string) {
  // logica para ordenar segun lo seleccionado
  if (sortBySelected === 'prioridad') {
      this.filteredTareas.sort((a, b) => {
          // Comparar las prioridades de las tareas
          return a.prioridad - b.prioridad;
      });
  }
  if (sortBySelected === 'fecha') {
    this.filteredTareas.sort((a, b) => {
        // Comparar la fecha de las tareas
        return a.fechaVencimiento.toString().localeCompare(b.fechaVencimiento.toString())
    });
}
}

realizarTarea(id: number) {
  // logica para cambiar estado a 'completado' de una tarea

  //buscar la posicion de la tarea a actualizar
  const index = this.tareas.findIndex(tarea => tarea.id === id);
    if (index !== -1) {
      // actualizar el estado
      let auxTarea = this.tareas[index]
      auxTarea.estado = 'completado'
      this.tareas[index] = auxTarea;
      
      // guardar la nueva lista
      const miArregloString = JSON.stringify(this.tareas);
      localStorage.clear
      localStorage.setItem('tareas', miArregloString);
      this.filteredTareas = this.tareas
    }
}

}
