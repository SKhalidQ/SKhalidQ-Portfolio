import { TestBed } from '@angular/core/testing';
import { EvolutionService } from './evolution.service';
import { SnackbarService } from '../snackbar/snackbar.service';

interface MockAudio { play: jasmine.Spy; volume: number }
type MockAudioConstructor = new (src?: string) => MockAudio;

describe('runEasterEgg - EvolutionService', () => {
  let service: EvolutionService;
  let snackbarSpy: jasmine.SpyObj<SnackbarService>;
  let originalAudio: unknown;

  beforeEach(() => {
    snackbarSpy = jasmine.createSpyObj<SnackbarService>('SnackbarService', ['EVOLUTION']);

    TestBed.configureTestingModule({
      providers: [
        EvolutionService,
        { provide: SnackbarService, useValue: snackbarSpy }
      ]
    });

    service = TestBed.inject(EvolutionService);
    originalAudio = (window as unknown as { Audio: MockAudioConstructor | typeof Audio }).Audio;
  });

  afterEach(() => {
    (window as unknown as { Audio: MockAudioConstructor | typeof Audio }).Audio =
      originalAudio as unknown as MockAudioConstructor | typeof Audio;
  });

  describe('when called fewer than 5 times - with a mock Audio', () => {
    let playSpy: jasmine.Spy;

    beforeEach(() => {
      playSpy = jasmine.createSpy('play');
      (window as unknown as { Audio: MockAudioConstructor }).Audio = function (this: unknown) {
        return { play: playSpy, volume: 0 };
      } as unknown as MockAudioConstructor;

      // Act: call three times (initial counter is 1 -> becomes 4)
      service.runEasterEgg();
      service.runEasterEgg();
      service.runEasterEgg();
    });

    it('should not call the EVOLUTION snackbar', () => {
      // Assert
      expect(snackbarSpy.EVOLUTION).not.toHaveBeenCalled();
    });

    it('should not play audio yet', () => {
      // Assert
      expect(playSpy).not.toHaveBeenCalled();
    });
  });

  describe('when called the 5th time - triggers behavior', () => {
    let playSpy: jasmine.Spy;
    let createdAudio: { play: jasmine.Spy, volume: number } | null;

    beforeEach(() => {
      playSpy = jasmine.createSpy('play');
      createdAudio = null;
      (window as unknown as { Audio: MockAudioConstructor }).Audio = function (this: unknown) {
        createdAudio = { play: playSpy, volume: 0 };
        return createdAudio;
      } as unknown as MockAudioConstructor;

      // Arrange: call four times so the next call is the 5th
      service.runEasterEgg(); // 2
      service.runEasterEgg(); // 3
      service.runEasterEgg(); // 4
      service.runEasterEgg(); // 5 -> the next call below will trigger
    });

    it('should play the Evolution audio when runEasterEgg is invoked the 5th time', () => {
      // Act
      service.runEasterEgg();

      // Assert (single responsibility)
      expect(playSpy).toHaveBeenCalled();
    });

    it('should call EVOLUTION on the SnackbarService when triggered', () => {
      // Act
      service.runEasterEgg();

      // Assert
      expect(snackbarSpy.EVOLUTION).toHaveBeenCalledTimes(1);
    });

    it('should set the audio volume to 1.0 when the audio is created', () => {
      // Act
      service.runEasterEgg();

      // Assert
      expect(createdAudio?.volume).toBe(1.0);
    });

    it('should reset the internal counter so subsequent 4 calls do not retrigger immediately', () => {
      // Act: trigger once to cause EVOLUTION
      service.runEasterEgg();

      // Reset spy calls for clear assertion of no further calls
      snackbarSpy.EVOLUTION.calls.reset();

      // Act: call four times after reset (should not trigger)
      service.runEasterEgg();
      service.runEasterEgg();
      service.runEasterEgg();
      service.runEasterEgg();

      // Assert: still no EVOLUTION calls
      expect(snackbarSpy.EVOLUTION).not.toHaveBeenCalled();
    });
  });
});

