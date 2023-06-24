import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DemoHomePage } from './demo-home.page';

describe('DemoHomePage', () => {
  let component: DemoHomePage;
  let fixture: ComponentFixture<DemoHomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DemoHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
