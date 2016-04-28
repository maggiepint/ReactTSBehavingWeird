/// <reference path="/React.MVC6.Sample/typings/main/ambient/react/index.d.ts" />
import React = require('react');

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

interface HelloComponentProps extends React.Props<any> {
    subtitle: string;
}
class HelloComponet extends React.Component<HelloComponentProps, {}>  {
    render() {
        return <div>{this.props.subtitle}</div>;
 }
}

export = HelloComponet;