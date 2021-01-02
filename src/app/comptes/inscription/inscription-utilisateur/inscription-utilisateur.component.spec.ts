import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { InscriptionUtilisateurComponent } from './inscription-utilisateur.component';

describe('InscriptionUtilisateurComponent', () => {
  let component: InscriptionUtilisateurComponent;
  let fixture: ComponentFixture<InscriptionUtilisateurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptionUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscriptionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
