/// <reference path="../typings/tsd.d.ts" />
const describe: any = require("mocha").describe;
const assert = require("chai").assert;

import {Patterns} from "../src/js/Patterns";

describe("Patterns", () => {
    describe("#compile()", () => {
        it("should ignore blank patterns", () => {
            const result = Patterns.compile([""]);
            assert.deepEqual([], result);
        });
    });
});
