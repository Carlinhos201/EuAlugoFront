import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEntrarContatoComponent } from './modal-entrar-contato.component';

describe('ModalEntrarContatoComponent', () => {
  let component: ModalEntrarContatoComponent;
  let fixture: ComponentFixture<ModalEntrarContatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEntrarContatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEntrarContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
