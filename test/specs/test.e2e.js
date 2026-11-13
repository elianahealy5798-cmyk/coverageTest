import { browser,expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import RecentCases from '../pageobjects/recentcase.page.js'

describe('My test', () => {
    it('should test', async () => {
            await LoginPage.open();
            await LoginPage.login(``) ;
            await expect(RecentCases.openRecent).toExist()
            await RecentCases.openRecent.click()
            await expect(RecentCases.openedCases).toExist()
            for (let position = 1; position <= 5; position++) {
                const row = await RecentCases.getMainGridRowByPosition(position);
                await row.doubleClick(); 
                await browser.back();
}



            await LoginPage.logout();

    })})