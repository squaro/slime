import routes from '../routes';

test('should contain the "home" property pointing to "/"', () => {
  expect(routes).toHaveProperty('home');
  expect(routes.home).toEqual('/');
});
