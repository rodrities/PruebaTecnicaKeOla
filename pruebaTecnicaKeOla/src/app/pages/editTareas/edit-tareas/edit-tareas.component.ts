import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Tarea } from 'src/app/shared/models/Tarea/Tarea';

@Component({
  selector: 'app-edit-tareas',
  templateUrl: './edit-tareas.component.html',
  styleUrls: ['./edit-tareas.component.css']
})
export class EditTareasComponent {
  createTareaForm!: FormGroup;
  newTarea: Tarea = new Tarea()
  tareas: Array<Tarea> = new Array<Tarea>()
  tareasString!: any
  value!: any
  date: Date | undefined;
  values: string[] | undefined;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { 
      this.createTareaForm = new FormGroup({
        tarea: new FormControl<string | null>(null, Validators.required),
        descripcion: new FormControl<string | null>(null, Validators.required),
        fecha: new FormControl<Date | null>(null, Validators.required),
        prioridad: new FormControl<number | null>(null, Validators.required),
        tags: new FormControl<string[] | null>(null, Validators.required)
      });
    }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // se obtiene el ID de la tarea a editar que se manda en los parametros de la ruta
      const id = params['id'];
      // se obtiene la lista de tareas
      this.tareasString = localStorage.getItem('tareas')
      this.tareas = JSON.parse(this.tareasString)
      // se busca la tarea con el ID que se envió
      const tareaAux = this.tareas.find(tarea => tarea.id == id);
      if (tareaAux) {
        // Si se encontró la tarea, asignarla a this.newTarea
        this.newTarea = tareaAux;
        console.log(this.newTarea)
      } 
    });
}

guardarTarea() : void {
  // Logica para guardar la tarea

  // Se busca la posicion de la tarea con el ID que se envió 
  const index = this.tareas.findIndex(tarea => tarea.id === this.newTarea.id);
    if (index !== -1) {
      // se actualiza la tarea
        this.tareas[index] = this.newTarea;
    }
  // se guarda la lista en el almacenamiento local  
  const miArregloString = JSON.stringify(this.tareas);
  localStorage.clear
  localStorage.setItem('tareas', miArregloString);
  this.router.navigate(['/'])
}
}
