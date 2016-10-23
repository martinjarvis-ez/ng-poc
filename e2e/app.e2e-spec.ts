import { EasyjetPocPage } from './app.po';

describe('easyjet-poc App', function() {
  let page: EasyjetPocPage;

  beforeEach(() => {
    page = new EasyjetPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
