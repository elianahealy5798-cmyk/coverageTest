import { $ } from '@wdio/globals'
import Page from './page.js';

class RecentCases extends Page {
    get openRecent () {
        return $('button[data-testid="vert-nav-recent-cases"]'); // 
    } 

    get openedCases () {
        return $('.fui-NavSubItemGroup')
    }

    get firstPosition () {
        return $('.fui-NavSubItem rsiqttu ___13sd3jv fqo71ku f1mdlcz9 f1f74g36 f1l66g77 f1tvrmnx f1p1ggug f3b9emi fu1a452 fk6fouc f1mulqs3 f5ljve1 f1i3iumi f8w4g0q f1s7vn0f f122n59 fly5x3f fv6wr3j f540s0x f1cmbuwj fby29hu f1ni9pe4 f12awlo f1lkqaok f11ht4ay');
    }

    get otherPositions () {
        return $('.fui-NavSubItem rsiqttu ___1hhnoo7 fqo71ku fjf0vx2 f1f7voed f122n59 fly5x3f fv6wr3j f540s0x f1cmbuwj fby29hu f1ni9pe4 f12awlo f1lkqaok f15wkkf3 fu1a452 f1mulqs3');
    }  

    get allRecentCaseDropdownItems() {
        return $$('[data-testid^="vert-nav-recent-case-"]');
    }

    async getRecentCaseDropdownItemByPosition(position) {
        const items = await this.allRecentCaseDropdownItems;
        return items[position - 1]; 
    }

    get allGridRows() {
        return $$('[role="rowgroup"] [role="row"]');
    }

    async getMainGridRowByPosition(position) {
        const rows = await $$('[role="rowgroup"] [role="row"]');
        return rows[position - 1];
    }

}

export default new RecentCases();

