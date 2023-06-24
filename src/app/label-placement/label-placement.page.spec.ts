import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LabelPlacementPage } from './label-placement.page';

describe('LabelPlacementPage', () => {
  let component: LabelPlacementPage;
  let fixture: ComponentFixture<LabelPlacementPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LabelPlacementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
