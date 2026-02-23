import { ActivePageService } from './active-page.service';
import { Page } from 'src/app/models/enums/page';

describe('constructor - ActivePageService', () => {
  let service: ActivePageService;

  beforeEach(() => {
    service = new ActivePageService();
  });

  describe('when created', () => {
    it('should create the service instance', () => {
      expect(service).toBeTruthy();
    });

    it('should initialize activePage BehaviorSubject with pages.Home', () => {
      const value: string = service.activePage.getValue();
      expect(value).toBe(`pages.${Page[Page.Home]}`);
    });
  });
});

describe('activePage$ - when subscribing and updating', () => {
  let service: ActivePageService;

  beforeEach(() => {
    service = new ActivePageService();
  });

  it('should emit the initial active page to subscribers', (done) => {
    // Arrange & Act
    service.activePage$.subscribe((v: string) => {
      // Assert: single responsibility
      expect(v).toBe(`pages.${Page[Page.Home]}`);
      done();
    });
  });

  it('should update the BehaviorSubject value when next is called', () => {
    // Arrange
    const newVal = `pages.${Page[Page.Projects]}`;

    // Act
    service.activePage.next(newVal);

    // Assert
    expect(service.activePage.getValue()).toBe(newVal);
  });

  it('should emit new values to subscribers when activePage.next is called', (done) => {
    // Arrange
    const emitted: string[] = [];
    service.activePage$.subscribe((v: string) => emitted.push(v));

    // Act
    const newVal = `pages.${Page[Page.About]}`;
    service.activePage.next(newVal);

    // Assert
    expect(emitted[emitted.length - 1]).toBe(newVal);
    done();
  });
});

