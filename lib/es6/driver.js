import { ReactSource, makeCycleReactComponent } from '@cycle/react';
import { AppRegistry } from 'react-native';
export function makeReactNativeDriver(appKey, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.registerRootComponent, registerRootComponent = _c === void 0 ? function (Root) {
        return AppRegistry.registerComponent(appKey, function () { return Root; });
    } : _c;
    return function reactNativeDriver(sink) {
        var source = new ReactSource();
        var Root = makeCycleReactComponent(function () { return ({ source: source, sink: sink }); });
        registerRootComponent(Root);
        return source;
    };
}
//# sourceMappingURL=driver.js.map