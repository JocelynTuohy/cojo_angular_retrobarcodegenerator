import { RetrobarcodePage } from './app.po';

describe('retrobarcode App', () => {
  let page: RetrobarcodePage;

  beforeEach(() => {
    page = new RetrobarcodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
