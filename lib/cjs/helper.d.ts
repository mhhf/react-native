import { ReactElement, ComponentType } from 'react';
export declare type Children = Array<ReactElement<any>> | string;
export declare type HelperSig<P> = {
    (sel: symbol): ReactElement<P>;
    (child: string): ReactElement<P>;
    (props: P): ReactElement<P>;
    (children: Children): ReactElement<P>;
    (sel: string | symbol, props: P): ReactElement<P>;
    (props: P, children: Children): ReactElement<P>;
    (sel: string | symbol, children: Children): ReactElement<P>;
    (sel: string | symbol, props: P, children: Children): ReactElement<P>;
};
export declare function makeHelper<P>(type: ComponentType<P>): HelperSig<P>;
