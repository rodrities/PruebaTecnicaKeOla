import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTareasComponent } from './pages/viewTareas/view-tareas/view-tareas.component';
import { TableModule } from 'primeng/table';
import { CreateTareasComponent } from './pages/createTareas/create-tareas/create-tareas.component';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropdownModule } from 'primeng/dropdown';
import { ChipsModule } from 'primeng/chips';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { BadgeModule } from 'primeng/badge';
import { EditTareasComponent } from './pages/editTareas/edit-tareas/edit-tareas.component';
@NgModule({
  declarations: [
    AppComponent,
    ViewTareasComponent,
    CreateTareasComponent,
    EditTareasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    InputTextModule,
    FormsModule,
    InputTextareaModule,
    CalendarModule,
    BrowserAnimationsModule,
    DropdownModule,
    ChipsModule,
    ButtonModule,
    ReactiveFormsModule,
    TagModule,
    CardModule,
    BadgeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
