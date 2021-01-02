import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InscriptionPrestataireComponent } from './inscription-prestataire.component';

describe('InscriptionPrestataireComponent', () => {
  let component: InscriptionPrestataireComponent;
  let fixture: ComponentFixture<InscriptionPrestataireComponent>;

  beforeEach(waitForAsync(() => {
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
