import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from 'src/app/shared/models/Tarea/Tarea';


@Component({
  selector: 'app-create-tareas',
  templateUrl: './create-tareas.component.html',
  styleUrls: ['./create-tareas.component.css']
})
export class CreateTareasComponent implements OnInit{

  createTareaForm!: FormGroup;
  newTarea: Tarea = new Tarea()
  tareas: Array<Tarea> = new Array<Tarea>()
  tareasString!: any
  value!: any
  date: Date | undefined;
  values: string[] | undefined;

  constructor(private formBuilder: FormBuilder,
     private router: Router){ 
      this.createTareaForm = new FormGroup({
        tarea: new FormControl<string | null>(null, Validators.required),
        descripcion: new FormControl<string | null>(null, Validators.required),
        fecha: new FormControl<Date | null>(null, Validators.required),
        prioridad: new FormControl<number | null>(null, Validators.required),
        tags: new FormControl<string[] | null>(null, Validators.required)
      });
     }

  ngOnInit() {}

  guardarTarea() : void {
    //Logica para guardar la tarea creada

  //Se obtiene la lista de tareas actual del almacenamiento local
  const storedData = localStorage.getItem('tareas');
  if (storedData !== null) {
    this.tareasString = storedData;
    this.tareas = JSON.parse(this.tareasString)
  }
  // Logica para añadirle un ID unico a la tarea
  if (this.tareas && this.tareas.length > 0) {
    const lastTask = this.tareas[this.tareas.length - 1];
    const lastTaskId = lastTask ? lastTask.id : 0; 
    this.newTarea.id = lastTaskId + 1;
  } else {
    // Si aun no tiene elementos la lista de tareas se le asigna ID inicial
    this.newTarea.id = 1; // Asignar un ID inicial
  }
  // Se setea el estado como pendiante al crear
  this.newTarea.estado = 'pendiente'
  // se añade la nueva tarea a la lista de tareas
  this.tareas.push(this.newTarea)
  
  // se guarda en el almacenamiento local
  const miArregloString = JSON.stringify(this.tareas);
  localStorage.clear
  localStorage.setItem('tareas', miArregloString);
  this.router.navigate(['/'])
}

}
