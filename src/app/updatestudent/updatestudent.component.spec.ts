import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatestudentComponent } from './updatestudent.component';

describe('UpdatestudentComponent', () => {
  let component: UpdatestudentComponent;
  let fixture: ComponentFixture<UpdatestudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdatestudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
