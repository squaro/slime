import NoSleep from 'nosleep.js';
import wakeLock from '../wakeLock';

describe('wakeLock', (): void => {
  it('should return a NoSleep instance', (): void => {
    // Assert
    expect(wakeLock).toBeInstanceOf(NoSleep);
    expect(wakeLock).toHaveProperty('enable');
    expect(wakeLock).toHaveProperty('disable');
    expect(wakeLock).toHaveProperty('isEnabled');
  });
});
