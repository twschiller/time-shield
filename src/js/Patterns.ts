/// <reference path="../../typings/tsd.d.ts" />

export namespace Patterns {
    "use strict";

    export function compile(patterns: string[]): RegExp[] {
        return patterns
            .filter((v: string) => v !== "")
            .map((v: string) => new RegExp(v));
    }
}
