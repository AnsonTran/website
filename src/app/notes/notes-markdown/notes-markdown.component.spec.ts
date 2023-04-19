import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesMarkdownComponent } from './notes-markdown.component';

describe('NotesMarkdownComponent', () => {
  let component: NotesMarkdownComponent;
  let fixture: ComponentFixture<NotesMarkdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesMarkdownComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotesMarkdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
