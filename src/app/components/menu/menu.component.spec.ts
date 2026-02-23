import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { MenuOption } from 'src/app/models/interfaces/menu';
import { ThemeService } from 'src/app/services/theme/theme.service';
import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  const mockThemeService: Partial<ThemeService> = {
    getEffectiveThemeMode: (): ThemeMode => ThemeMode.LightMode
  };

  beforeEach(() => {
    TestBed.overrideComponent(MenuComponent, { set: { template: '<div></div>' } });
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      providers: [ { provide: ThemeService, useValue: mockThemeService } ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  it('creates the component', () => {
    expect(component).toBeTruthy();
  });

  describe('onMenuOptionClick', () => {
    describe('when onMenuClose is provided and option has method', () => {
      it('calls onMenuClose and the option method with option.text', () => {
        // Arrange
        const methodSpy = jasmine.createSpy('optionMethod');
        const closeSpy = jasmine.createSpy('onMenuClose');
        const option: MenuOption = { key: 'k', text: 'the-text', icon: 'icon', iconType: 'icon', method: methodSpy };
        component.onMenuClose = closeSpy;

        // Act
        component.onMenuOptionClick(option);

        // Assert
        expect(closeSpy).toHaveBeenCalledTimes(1);
        expect(methodSpy).toHaveBeenCalledOnceWith(option.text);
      });
    });

    describe('when option.method is undefined', () => {
      it('still calls onMenuClose but does not throw', () => {
        // Arrange
        const closeSpy = jasmine.createSpy('onMenuClose');
        const option: MenuOption = { key: 'k', text: 'no-method', icon: 'icon', iconType: 'icon', method: undefined as unknown as (identifier: string) => void };
        component.onMenuClose = closeSpy;

        // Act
        component.onMenuOptionClick(option);

        // Assert
        expect(closeSpy).toHaveBeenCalledTimes(1);
      });
    });
  });
});
