import { B300095342Page } from './app.po';

describe('b300095342 App', function() {
  let page: B300095342Page;

  beforeEach(() => {
    page = new B300095342Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
