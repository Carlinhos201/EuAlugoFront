import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutoSingularComponent } from './produto-singular.component';

describe('ProdutoSingularComponent', () => {
  let component: ProdutoSingularComponent;
  let fixture: ComponentFixture<ProdutoSingularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProdutoSingularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoSingularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
