import { TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs';
import { Meta } from '@angular/platform-browser';
import { MetaThemeService } from './meta-theme.service';
import { ThemeMode } from 'src/app/models/enums/theme-mode';
import { ThemeService } from '../theme/theme.service';

describe('constructor - MetaThemeService', () => {
  let metaSpy: jasmine.SpyObj<Meta>;
  let themeSubject: BehaviorSubject<ThemeMode>;
  let themeServiceMock: Partial<ThemeService>;

  beforeEach(() => {
    metaSpy = jasmine.createSpyObj<Meta>('Meta', ['getTag', 'addTag', 'updateTag']);
    // Default: no existing tag
    metaSpy.getTag.and.returnValue(null);

    themeSubject = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
    themeServiceMock = {
      effectiveThemeMode$: themeSubject,
      getSystemPreferredTheme: () => ThemeMode.LightMode
    } as unknown as ThemeService;

    TestBed.configureTestingModule({
      providers: [
        MetaThemeService,
        { provide: Meta, useValue: metaSpy },
        { provide: ThemeService, useValue: themeServiceMock }
      ]
    });
  });

  it('should add a theme-color meta tag if it does not exist', () => {
    expect(metaSpy.addTag).toHaveBeenCalledWith({ name: 'theme-color', content: '#f5f5f5' });
  });

  it('should update the theme-color meta tag when the theme changes', () => {
    // Act: emit dark mode
    themeSubject.next(ThemeMode.DarkMode);

    // Assert
    expect(metaSpy.updateTag).toHaveBeenCalledWith({ name: 'theme-color', content: '#212121' });
  });
});

describe('initializeMetaTag - when tag already exists', () => {
  it('should not add a new tag if one already exists', () => {
    const metaSpy = jasmine.createSpyObj<Meta>('Meta', ['getTag', 'addTag', 'updateTag']);
    metaSpy.getTag.and.returnValue({ name: 'theme-color', content: '#abc' } as unknown as HTMLMetaElement);

    const themeSubject = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
    const themeServiceMock = { effectiveThemeMode$: themeSubject } as unknown as ThemeService;

    TestBed.configureTestingModule({
      providers: [
        MetaThemeService,
        { provide: Meta, useValue: metaSpy },
        { provide: ThemeService, useValue: themeServiceMock }
      ]
    });

    TestBed.inject(MetaThemeService);

    expect(metaSpy.addTag).not.toHaveBeenCalled();
  });
});

describe('getThemeColor & setThemeColor - MetaThemeService', () => {
  let service: MetaThemeService;
  let metaSpy: jasmine.SpyObj<Meta>;
  let themeServiceMock: Partial<ThemeService>;

  beforeEach(() => {
    metaSpy = jasmine.createSpyObj<Meta>('Meta', ['getTag', 'addTag', 'updateTag']);
    metaSpy.getTag.and.returnValue(null as unknown as HTMLMetaElement | null);
    const subject = new BehaviorSubject<ThemeMode>(ThemeMode.LightMode);
    themeServiceMock = { effectiveThemeMode$: subject, getSystemPreferredTheme: () => ThemeMode.LightMode } as unknown as ThemeService;

    TestBed.configureTestingModule({
      providers: [
        MetaThemeService,
        { provide: Meta, useValue: metaSpy },
        { provide: ThemeService, useValue: themeServiceMock }
      ]
    });

    service = TestBed.inject(MetaThemeService);
  });

  it('getThemeColor should return light color for LightMode', () => {
    expect(service.getThemeColor(ThemeMode.LightMode)).toBe('#f5f5f5');
  });

  it('getThemeColor should return dark color for DarkMode', () => {
    expect(service.getThemeColor(ThemeMode.DarkMode)).toBe('#212121');
  });

  it('getThemeColor with SystemDefault should use ThemeService.getSystemPreferredTheme (dark)', () => {
    // Arrange: replace themeService to return DarkMode
    const themeSvc = TestBed.inject(ThemeService) as Partial<ThemeService> & { getSystemPreferredTheme?: () => ThemeMode };
    themeSvc.getSystemPreferredTheme = (): ThemeMode => ThemeMode.DarkMode;

    // Act & Assert
    expect(service.getThemeColor(ThemeMode.SystemDefault)).toBe('#212121');
  });

  it('setThemeColor should update the meta tag for DarkMode', () => {
    service.setThemeColor(ThemeMode.DarkMode);

    expect(metaSpy.updateTag).toHaveBeenCalledWith({ name: 'theme-color', content: '#212121' });
  });

  it('setThemeColor with SystemDefault should call ThemeService.getSystemPreferredTheme and update accordingly', () => {
    const themeSvc = TestBed.inject(ThemeService) as Partial<ThemeService> & { getSystemPreferredTheme?: () => ThemeMode };
    themeSvc.getSystemPreferredTheme = (): ThemeMode => ThemeMode.LightMode;

    service.setThemeColor(ThemeMode.SystemDefault);

    expect(metaSpy.updateTag).toHaveBeenCalledWith({ name: 'theme-color', content: '#f5f5f5' });
  });
});

