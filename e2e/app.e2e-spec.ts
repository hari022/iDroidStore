import { IDroidStorePage } from './app.po';

describe('i-droid-store App', () => {
  let page: IDroidStorePage;

  beforeEach(() => {
    page = new IDroidStorePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
