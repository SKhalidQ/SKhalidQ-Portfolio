import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform } from '@angular/core';

import { HistoryComponent } from './history.component';
import { History } from 'src/app/models/interfaces/curriculum';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value;
  }
}

describe('constructor - HistoryComponent', () => {
  let fixture: ComponentFixture<HistoryComponent>;
  let component: HistoryComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryComponent, MockTranslatePipe],
    }).compileComponents();

    fixture = TestBed.createComponent(HistoryComponent);
    component = fixture.componentInstance;
  });

  describe('when created with no inputs', () => {
    it('should create the component instance', () => {
      // Arrange: nothing to setup beyond TestBed
      // Act:
      fixture.detectChanges();
      // Assert:
      expect(component).toBeTruthy();
    });
  });

  describe('when provided a title and history items', () => {
    const sampleHistory: History[] = [
      {
        dates: '2019-2020',
        title: 'Sample Role',
        description: 'Did many things'
      },
      {
        dates: '2021-2022',
        title: 'Another Role',
        description: 'Did other things'
      }
    ];

    beforeEach(() => {
      // Arrange
      component.title = 'Curriculum.Title';
      component.history = sampleHistory;
      // Act
      fixture.detectChanges();
    });

    it('should render the translated title', () => {
      const el: HTMLElement = fixture.nativeElement as HTMLElement;
      const titleEl = el.querySelector('.title .bold');
      expect(titleEl?.textContent?.trim()).toBe('Curriculum.Title');
    });

    it('should render each history item with dates, title and description', () => {
      const el: HTMLElement = fixture.nativeElement as HTMLElement;
      const items = Array.from(el.querySelectorAll('.history .content li'));
      expect(items.length).toBe(sampleHistory.length);

      items.forEach((itemEl, idx) => {
        const dates = itemEl.querySelector('.date')?.textContent?.trim();
        const itemTitle = itemEl.querySelector('.info .semi-bold')?.textContent?.trim();
        const description = itemEl.querySelector('.info .description')?.textContent?.trim();

        expect(dates).toBe(sampleHistory[idx].dates);
        expect(itemTitle).toBe(sampleHistory[idx].title);
        expect(description).toBe(sampleHistory[idx].description);
      });
    });
  });
});

