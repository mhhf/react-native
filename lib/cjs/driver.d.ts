import { Stream } from 'xstream';
import { ReactSource } from '@cycle/react';
import { ReactElement } from 'react';
export declare function makeReactNativeDriver(appKey: string, { registerRootComponent, }?: {
    registerRootComponent?: (component: React.ComponentType) => any;
}): (sink: Stream<ReactElement<any>>) => ReactSource<any>;
