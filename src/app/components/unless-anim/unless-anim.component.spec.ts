import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnlessAnimComponent } from './unless-anim.component';

describe('UnlessAnimComponent', () => {
  let component: UnlessAnimComponent;
  let fixture: ComponentFixture<UnlessAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnlessAnimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnlessAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
