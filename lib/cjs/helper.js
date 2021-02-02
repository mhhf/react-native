"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeHelper = void 0;
var react_1 = require("@cycle/react");
function parseSelector(param) {
    if (typeof param === 'symbol')
        return param;
    if (typeof param === 'string' && param.length > 0)
        return param;
    return null;
}
function makeHelper(type) {
    return function helper(a, b, c) {
        var hasA = typeof a !== 'undefined';
        var hasB = typeof b !== 'undefined';
        var hasBChildren = Array.isArray(b) || typeof b === 'string';
        var hasC = typeof c !== 'undefined';
        var sel = parseSelector(a);
        if (sel) {
            if (hasB && hasC) {
                return react_1.h(type, __assign(__assign({}, b), { sel: sel }), c);
            }
            else if (hasB && hasBChildren) {
                return react_1.h(type, { sel: sel }, b);
            }
            else if (hasB) {
                return react_1.h(type, __assign(__assign({}, b), { sel: sel }));
            }
            else if (typeof sel === 'symbol') {
                return react_1.h(type, { sel: sel });
            }
            else {
                return react_1.h(type, sel /* child, not a sel */);
            }
        }
        else if (hasC) {
            return react_1.h(type, b, c);
        }
        else if (hasB) {
            return react_1.h(type, a, b);
        }
        else if (hasA) {
            return react_1.h(type, a);
        }
        else {
            return react_1.h(type);
        }
    };
}
exports.makeHelper = makeHelper;
//# sourceMappingURL=helper.js.map