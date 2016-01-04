/// <reference path="../../typings/tsd.d.ts" />

import TabChangeInfo = chrome.tabs.TabChangeInfo;
import Tab = chrome.tabs.Tab;
import { IOptions } from "./IOptions";

let _patterns: RegExp[] = [];

function compile(patterns: string[]) {
    _patterns = patterns.map((v: string) => new RegExp(v));
    console.log("Compiled patterns...", patterns);
}

chrome.storage.sync.get({ patterns: [] }, (items: IOptions) => {
    compile(items.patterns);
});

chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: TabChangeInfo, tab: Tab) => {
    const oldUrl = tab.url;
    const newUrl = chrome.extension.getURL("../html/nudge.html");

    if (_patterns.some(r => oldUrl.match(r) !== null)) {
        chrome.tabs.update(tabId, {url: newUrl});
    }
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.patterns !== undefined) {
        compile(request.patterns);
    }
});
