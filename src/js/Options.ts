/// <reference path="../../typings/tsd.d.ts" />

import { IOptions } from "./IOptions";

"use strict";

namespace Options {

    "use strict";

    const DEFAULT_PATTERNS: string[] = [
        "facebook.com",
        "reddit.com",
    ];

    export function saveOptions(): void {
        const raw = (document.getElementById("patterns") as HTMLInputElement).value;
        const patterns = raw.split("\n");
        chrome.storage.sync.set({patterns}, () => {
            // update status to let user know options were saved.
            const status = document.getElementById("status");
            status.textContent = "Options saved.";
            setTimeout(() => {
                status.textContent = "";
            }, 750);
        });
        chrome.runtime.sendMessage({patterns});
    }

    /**
     * Restores select box and checkbox state using the preferences
     * stored in chrome.storage.
     */
    export function restoreOptions(): void {
        chrome.storage.sync.get({patterns: DEFAULT_PATTERNS}, (items: IOptions) => {
            (document.getElementById("patterns") as HTMLInputElement).value = items.patterns.join("\n");
        });
    }
}

document.addEventListener("DOMContentLoaded", Options.restoreOptions);
document.getElementById("save").addEventListener("click", Options.saveOptions);
