import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAbmComponent } from './lista-abm.component';

describe('ListaAbmComponent', () => {
  let component: ListaAbmComponent;
  let fixture: ComponentFixture<ListaAbmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAbmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAbmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
