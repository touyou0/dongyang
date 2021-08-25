import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationEditPageComponent } from './information-edit-page.component';

describe('InformationEditPageComponent', () => {
  let component: InformationEditPageComponent;
  let fixture: ComponentFixture<InformationEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
