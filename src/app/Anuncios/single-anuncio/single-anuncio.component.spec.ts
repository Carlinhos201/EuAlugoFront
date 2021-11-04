import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAnuncioComponent } from './single-anuncio.component';

describe('SingleAnuncioComponent', () => {
  let component: SingleAnuncioComponent;
  let fixture: ComponentFixture<SingleAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
