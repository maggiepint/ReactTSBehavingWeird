"use strict";
/// <reference path="/React.MVC6.Sample/typings/main/ambient/react/index.d.ts" />
const React = require('react');
class HelloComponet extends React.Component {
    render() {
        return <div>{this.props.subtitle}</div>;
    }
}
module.exports = HelloComponet;
