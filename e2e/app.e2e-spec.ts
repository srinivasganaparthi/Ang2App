import { MyNewAng2AppPage } from './app.po';

describe('my-new-ang2-app App', () => {
  let page: MyNewAng2AppPage;

  beforeEach(() => {
    page = new MyNewAng2AppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
