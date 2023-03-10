import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentUploaderComponent } from './content-uploader.component';

describe('ContentUploaderComponent', () => {
  let component: ContentUploaderComponent;
  let fixture: ComponentFixture<ContentUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentUploaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
