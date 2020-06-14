import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPrestataireComponent } from './inscription-prestataire.component';

describe('InscriptionPrestataireComponent', () => {
  let component: InscriptionPrestataireComponent;
  let fixture: ComponentFixture<InscriptionPrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionPrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
