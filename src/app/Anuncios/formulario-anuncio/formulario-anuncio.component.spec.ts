import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAnuncioComponent } from './formulario-anuncio.component';

describe('FormularioAnuncioComponent', () => {
  let component: FormularioAnuncioComponent;
  let fixture: ComponentFixture<FormularioAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
