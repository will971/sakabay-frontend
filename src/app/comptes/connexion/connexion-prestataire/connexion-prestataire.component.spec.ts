import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionPrestataireComponent } from './connexion-prestataire.component';

describe('ConnexionPrestataireComponent', () => {
  let component: ConnexionPrestataireComponent;
  let fixture: ComponentFixture<ConnexionPrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionPrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
