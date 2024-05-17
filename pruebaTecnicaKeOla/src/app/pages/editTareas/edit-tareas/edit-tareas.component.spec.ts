import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTareasComponent } from './edit-tareas.component';

describe('EditTareasComponent', () => {
  let component: EditTareasComponent;
  let fixture: ComponentFixture<EditTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditTareasComponent]
    });
    fixture = TestBed.createComponent(EditTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
