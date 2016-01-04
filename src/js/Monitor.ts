/// <reference path="../../typings/tsd.d.ts" />

class Monitor {
    private _patterns: RegExp[];

    constructor(patterns: RegExp[]) {
        this._patterns = patterns;
    }

    public set patterns(other: RegExp[]) {
        this._patterns = other;
    }

    public match(url: string): boolean {
        return this._patterns.some(r => url.match(r) !== null);
    }
}

export default new Monitor([]);
