import routes from '../routes';

describe('routes', (): void => {
  it('should contain the "home" property pointing to "/"', (): void => {
    // Assert
    expect(routes).toHaveProperty('home');
    expect(routes.home).toEqual('/');
  });
});
