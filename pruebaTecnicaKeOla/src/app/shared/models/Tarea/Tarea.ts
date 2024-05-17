export class Tarea {
    id!: number
    nombre!: string
    descripcion!: string
    fechaVencimiento!: Date
    prioridad!: number
    tags!: Array<string>
    estado!: string
}