import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ConnexionUtilisateurComponent } from './connexion-utilisateur.component';

describe('ConnexionUtilisateurComponent', () => {
  let component: ConnexionUtilisateurComponent;
  let fixture: ComponentFixture<ConnexionUtilisateurComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnexionUtilisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
