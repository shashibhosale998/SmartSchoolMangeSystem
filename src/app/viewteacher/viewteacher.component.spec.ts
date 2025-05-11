import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTeacherComponent } from './viewteacher.component';

describe('ViewteacherComponent', () => {
  let component: ViewTeacherComponent;
  let fixture: ComponentFixture<ViewTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTeacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
