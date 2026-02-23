import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { NO_ERRORS_SCHEMA, Pipe, PipeTransform } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { ActivePageService } from 'src/app/services/active-page/active-page.service';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { Page } from 'src/app/models/enums/page';

@Pipe({ name: 'translate' })
class MockTranslatePipe implements PipeTransform {
  transform(value: unknown): unknown { return value; }
}

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  const themeSubject = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
  const mockThemeService: Partial<ThemeService> = {
    themeMode: themeSubject,
    getSystemPreferredTheme: (): ThemeMode => ThemeMode.LightMode
  };

  const activePageSubject = new BehaviorSubject<string>('');
  let activePageNextSpy: jasmine.Spy;
  const mockActivePageService: Partial<ActivePageService> = { activePage: activePageSubject };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePageComponent, MockTranslatePipe],
      providers: [
        { provide: ThemeService, useValue: mockThemeService },
        { provide: ActivePageService, useValue: mockActivePageService }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    activePageNextSpy = spyOn(activePageSubject, 'next').and.callThrough();
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    describe('when component initializes', () => {
      it('calls activePageService.activePage.next with pages.Home', () => {
        // Arrange
        activePageNextSpy.calls.reset();

        // Act
        fixture.detectChanges();

        // Assert
        expect(activePageNextSpy).toHaveBeenCalledTimes(1);
        const arg = activePageNextSpy.calls.mostRecent().args[0] as string;
        expect(arg).toContain('pages.');
        expect(arg).toContain(Page[Page.Home]);
      });
    });
  });

  describe('projectImagePath', () => {
    describe('when theme is DarkMode', () => {
      it('returns ProjectPreviewDark.png', () => {
        // Arrange
        themeSubject.next(ThemeMode.DarkMode);

        // Act
        const path = component.projectImagePath;

        // Assert
        expect(path).toContain('ProjectPreviewDark.png');
      });
    });

    describe('when theme is LightMode', () => {
      it('returns ProjectPreviewLight.png', () => {
        // Arrange
        themeSubject.next(ThemeMode.LightMode);

        // Act
        const path = component.projectImagePath;

        // Assert
        expect(path).toContain('ProjectPreviewLight.png');
      });
    });

    describe('when theme is SystemDefault', () => {
      it('resolves using getSystemPreferredTheme and returns Dark preview when system prefers dark', () => {
        // Arrange
        (mockThemeService.getSystemPreferredTheme as () => ThemeMode) = (): ThemeMode => ThemeMode.DarkMode;
        themeSubject.next(ThemeMode.SystemDefault);

        // Act
        const path = component.projectImagePath;

        // Assert
        expect(path).toContain('ProjectPreviewDark.png');
      });

      it('resolves using getSystemPreferredTheme and returns Light preview when system prefers light', () => {
        // Arrange
        (mockThemeService.getSystemPreferredTheme as () => ThemeMode) = (): ThemeMode => ThemeMode.LightMode;
        themeSubject.next(ThemeMode.SystemDefault);

        // Act
        const path = component.projectImagePath;

        // Assert
        expect(path).toContain('ProjectPreviewLight.png');
      });
    });
  });

  describe('cvImagePath', () => {
    describe('when theme is DarkMode', () => {
      it('returns CVPreviewDark.png', () => {
        // Arrange
        themeSubject.next(ThemeMode.DarkMode);

        // Act
        const path = component.cvImagePath;

        // Assert
        expect(path).toContain('CVPreviewDark.png');
      });
    });

    describe('when theme is LightMode', () => {
      it('returns CVPreviewLight.png', () => {
        // Arrange
        themeSubject.next(ThemeMode.LightMode);

        // Act
        const path = component.cvImagePath;

        // Assert
        expect(path).toContain('CVPreviewLight.png');
      });
    });
  });
});
