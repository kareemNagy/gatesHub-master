import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatesHubComponent } from './gates-hub.component';

describe('GatesHubComponent', () => {
  let component: GatesHubComponent;
  let fixture: ComponentFixture<GatesHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GatesHubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GatesHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
