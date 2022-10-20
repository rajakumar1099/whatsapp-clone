import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentMessagesListComponent } from './recent-messages-list.component';

describe('RecentMessagesListComponent', () => {
  let component: RecentMessagesListComponent;
  let fixture: ComponentFixture<RecentMessagesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentMessagesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentMessagesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
