import NoSleep from 'nosleep.js';
import wakeLock from '../wakeLock';

test('should return a NoSleep instance', () => {
  expect(wakeLock).toBeInstanceOf(NoSleep);
  expect(wakeLock).toHaveProperty('enable');
  expect(wakeLock).toHaveProperty('disable');
  expect(wakeLock).toHaveProperty('isEnabled');
});
