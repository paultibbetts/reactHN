declare module 'react-remarkable' {
    import * as React from 'react';

    export interface Props {
        source: string
    }
    
    declare class Remarkable extends React.Component<Props, any> {}
    
    export = Remarkable
}

