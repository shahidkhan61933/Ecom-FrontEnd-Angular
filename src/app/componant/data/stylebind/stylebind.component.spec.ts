import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebindComponent } from './stylebind.component';

describe('StylebindComponent', () => {
  let component: StylebindComponent;
  let fixture: ComponentFixture<StylebindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylebindComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylebindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
