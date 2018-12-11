describe('App', () => {
  const hostName = 'http://localhost:3000';

  describe('root view', () => {
    beforeAll(async () => {
      await page.goto(`${hostName}/`, { waitUntil: 'networkidle0' });
    });
    it('should display items', async () => {
      await expect(page).toMatchElement(
        'ul[data-selector=item-list] li[data-selector=item-list-element]'
      );
    });
    it('should have a Link', async () => {
      const href = await page.$eval('a', e => e.getAttribute('href'));
      await page.click('a');
      expect(await page.url()).toMatch(href);

      // await expect(page).toMatchElement('a');
    });
  });
});
