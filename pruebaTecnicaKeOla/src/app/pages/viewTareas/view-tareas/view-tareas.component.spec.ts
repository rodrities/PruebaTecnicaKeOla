import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTareasComponent } from './view-tareas.component';

describe('ViewTareasComponent', () => {
  let component: ViewTareasComponent;
  let fixture: ComponentFixture<ViewTareasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewTareasComponent]
    });
    fixture = TestBed.createComponent(ViewTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
