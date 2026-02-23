import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Subject } from 'rxjs';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SiteStatusService } from './services/site-status/site-status.service';
import { ThemeService } from './services/theme/theme.service';
import { MetaThemeService } from './services/meta-theme/meta-theme.service';
import { Page } from './models/enums/page';
import { Environment } from './models/enums/environment';
import { environment } from 'src/environments/environment';

describe('AppComponent', () => {
  // Creation smoke test
  it('should create the app', () => {
    // Arrange
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: { firstChild: null } },
        { provide: Router, useValue: { events: new Subject<NavigationEnd>().asObservable() } },
        { provide: Title, useValue: jasmine.createSpyObj('Title', ['getTitle', 'setTitle']) },
        { provide: SiteStatusService, useValue: {} },
        { provide: ThemeService, useValue: {} },
        { provide: MetaThemeService, useValue: {} }
      ]
    });

    // Act
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    // Assert
    expect(app).toBeTruthy();
  });

  it('should set tab title to app title when no route data present', () => {
    // Arrange
    const events$ = new Subject<NavigationEnd>();
    const routerStub = { events: events$.asObservable() } as Partial<Router>;
    const titleSpy = jasmine.createSpyObj('Title', ['getTitle', 'setTitle']);
    titleSpy.getTitle.and.returnValue('My App Title');
    const activatedRouteStub = { firstChild: null } as Partial<ActivatedRoute>;

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: activatedRouteStub },
        { provide: Title, useValue: titleSpy },
        { provide: SiteStatusService, useValue: {} },
        { provide: ThemeService, useValue: {} },
        { provide: MetaThemeService, useValue: {} }
      ]
    });

    // Act
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.setTabTitle();
    events$.next(new NavigationEnd(1, '/a', '/a'));

    // Assert
    expect(titleSpy.setTitle).toHaveBeenCalledWith('My App Title');
  });

  it('should set tab title from deepest activated route pageTitle data', () => {
    // Arrange
    const events$ = new Subject<NavigationEnd>();
    const routerStub = { events: events$.asObservable() } as Partial<Router>;
    const titleSpy = jasmine.createSpyObj('Title', ['getTitle', 'setTitle']);
    titleSpy.getTitle.and.returnValue('Fallback Title');

    const deepRoute = { snapshot: { data: { pageTitle: Page.Projects } }, firstChild: null } as Partial<ActivatedRoute> & { snapshot?: { data: { pageTitle: Page } } };
    const midRoute = { firstChild: deepRoute } as Partial<ActivatedRoute>;
    const rootRoute = { firstChild: midRoute } as Partial<ActivatedRoute>;

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerStub },
        { provide: ActivatedRoute, useValue: rootRoute },
        { provide: Title, useValue: titleSpy },
        { provide: SiteStatusService, useValue: {} },
        { provide: ThemeService, useValue: {} },
        { provide: MetaThemeService, useValue: {} }
      ]
    });

    const expected = `${Page[Page.Projects]} | Porfolio - ${Environment[environment.environment]} | SKhalidQ`;

    // Act
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.setTabTitle();
    events$.next(new NavigationEnd(1, '/projects', '/projects'));

    // Assert
    expect(titleSpy.setTitle).toHaveBeenCalledWith(expected);
  });
});
