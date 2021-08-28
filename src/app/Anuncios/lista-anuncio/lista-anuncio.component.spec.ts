import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnuncioComponent } from './lista-anuncio.component';

describe('ListaAnuncioComponent', () => {
  let component: ListaAnuncioComponent;
  let fixture: ComponentFixture<ListaAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
