import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeusAnuncioComponent } from './meus-anuncio.component';

describe('MeusAnuncioComponent', () => {
  let component: MeusAnuncioComponent;
  let fixture: ComponentFixture<MeusAnuncioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeusAnuncioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeusAnuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
