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
import { h } from '@cycle/react';
function parseSelector(param) {
    if (typeof param === 'symbol')
        return param;
    if (typeof param === 'string' && param.length > 0)
        return param;
    return null;
}
export function makeHelper(type) {
    return function helper(a, b, c) {
        var hasA = typeof a !== 'undefined';
        var hasB = typeof b !== 'undefined';
        var hasBChildren = Array.isArray(b) || typeof b === 'string';
        var hasC = typeof c !== 'undefined';
        var sel = parseSelector(a);
        if (sel) {
            if (hasB && hasC) {
                return h(type, __assign(__assign({}, b), { sel: sel }), c);
            }
            else if (hasB && hasBChildren) {
                return h(type, { sel: sel }, b);
            }
            else if (hasB) {
                return h(type, __assign(__assign({}, b), { sel: sel }));
            }
            else if (typeof sel === 'symbol') {
                return h(type, { sel: sel });
            }
            else {
                return h(type, sel /* child, not a sel */);
            }
        }
        else if (hasC) {
            return h(type, b, c);
        }
        else if (hasB) {
            return h(type, a, b);
        }
        else if (hasA) {
            return h(type, a);
        }
        else {
            return h(type);
        }
    };
}
//# sourceMappingURL=helper.js.map