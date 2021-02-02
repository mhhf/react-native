"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeReactNativeDriver = void 0;
var react_1 = require("@cycle/react");
var react_native_1 = require("react-native");
function makeReactNativeDriver(appKey, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.registerRootComponent, registerRootComponent = _c === void 0 ? function (Root) {
        return react_native_1.AppRegistry.registerComponent(appKey, function () { return Root; });
    } : _c;
    return function reactNativeDriver(sink) {
        var source = new react_1.ReactSource();
        var Root = react_1.makeCycleReactComponent(function () { return ({ source: source, sink: sink }); });
        registerRootComponent(Root);
        return source;
    };
}
exports.makeReactNativeDriver = makeReactNativeDriver;
//# sourceMappingURL=driver.js.map