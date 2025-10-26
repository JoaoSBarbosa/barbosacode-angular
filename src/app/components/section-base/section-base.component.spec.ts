import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBaseComponent } from './section-base.component';

describe('SectionBaseComponent', () => {
  let component: SectionBaseComponent;
  let fixture: ComponentFixture<SectionBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SectionBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
