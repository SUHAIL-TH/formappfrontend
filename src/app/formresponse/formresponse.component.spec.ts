import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormresponseComponent } from './formresponse.component';

describe('FormresponseComponent', () => {
  let component: FormresponseComponent;
  let fixture: ComponentFixture<FormresponseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormresponseComponent]
    });
    fixture = TestBed.createComponent(FormresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
