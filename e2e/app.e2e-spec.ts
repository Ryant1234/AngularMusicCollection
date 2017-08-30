import { MusicCollectionPage } from './app.po';

describe('music-collection App', () => {
  let page: MusicCollectionPage;

  beforeEach(() => {
    page = new MusicCollectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
