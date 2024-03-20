import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework4Component } from './homework4.component';

describe('Homework4Component', () => {
  let component: Homework4Component;
  let fixture: ComponentFixture<Homework4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Homework4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Homework4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
