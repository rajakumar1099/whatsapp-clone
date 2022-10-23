import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMessagesHeaderComponent } from './recent-messages-header.component';

describe('RecentMessagesHeaderComponent', () => {
  let component: RecentMessagesHeaderComponent;
  let fixture: ComponentFixture<RecentMessagesHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentMessagesHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentMessagesHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
