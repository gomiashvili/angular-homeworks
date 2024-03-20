import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvenLogoComponent } from './aven-logo.component';

describe('AvenLogoComponent', () => {
  let component: AvenLogoComponent;
  let fixture: ComponentFixture<AvenLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvenLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvenLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
