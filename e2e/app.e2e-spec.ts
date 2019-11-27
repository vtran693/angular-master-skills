import { AngularMasterSkillsPage } from './app.po';

describe('angular-master-skills App', function() {
  let page: AngularMasterSkillsPage;

  beforeEach(() => {
    page = new AngularMasterSkillsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
