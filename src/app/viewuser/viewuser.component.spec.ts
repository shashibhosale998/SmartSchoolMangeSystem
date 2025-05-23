import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuserComponent } from './viewuser.component';

describe('ViewuserComponent', () => {
  let component: ViewuserComponent;
  let fixture: ComponentFixture<ViewuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewuserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
