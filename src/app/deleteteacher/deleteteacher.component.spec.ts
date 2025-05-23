import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteteacherComponent } from './deleteteacher.component';

describe('DeleteteacherComponent', () => {
  let component: DeleteteacherComponent;
  let fixture: ComponentFixture<DeleteteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteteacherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
