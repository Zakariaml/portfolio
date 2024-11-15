import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyConceptComponent } from './key-concept.component';

describe('KeyConceptComponent', () => {
  let component: KeyConceptComponent;
  let fixture: ComponentFixture<KeyConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyConceptComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KeyConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
