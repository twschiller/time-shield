/// <reference path="../../typings/tsd.d.ts" />

import TabChangeInfo = chrome.tabs.TabChangeInfo;
import Tab = chrome.tabs.Tab;
import { IOptions } from "./IOptions";
import { Patterns } from "./Patterns";
import Monitor from "./Monitor";

chrome.storage.sync.get({patterns: []}, (items: IOptions) => {
    Monitor.patterns = Patterns.compile(items.patterns);
});

chrome.tabs.onUpdated.addListener((tabId: number, changeInfo: TabChangeInfo, tab: Tab) => {
    const newUrl = chrome.extension.getURL("../html/nudge.html");
    if (Monitor.match(tab.url)) {
        chrome.tabs.update(tabId, {url: newUrl});
    }
});

chrome.runtime.onMessage.addListener((request) => {
    if (request.patterns !== undefined) {
        Monitor.patterns = Patterns.compile(request.patterns);
    }
});
