import { AngularSampleCliPage } from './app.po';

describe('angular-sample-cli App', function() {
  let page: AngularSampleCliPage;

  beforeEach(() => {
    page = new AngularSampleCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
