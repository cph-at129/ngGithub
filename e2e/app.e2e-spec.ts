import { NgGithubPage } from './app.po';

describe('ng-github App', function() {
  let page: NgGithubPage;

  beforeEach(() => {
    page = new NgGithubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
