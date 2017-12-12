import { ScrumclientfhmPage } from './app.po';

describe('scrumclientfhm App', () => {
  let page: ScrumclientfhmPage;

  beforeEach(() => {
    page = new ScrumclientfhmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
