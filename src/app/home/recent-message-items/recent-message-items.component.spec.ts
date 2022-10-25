import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMessageItemsComponent } from './recent-message-items.component';

describe('RecentMessageItemsComponent', () => {
  let component: RecentMessageItemsComponent;
  let fixture: ComponentFixture<RecentMessageItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMessageItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentMessageItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
