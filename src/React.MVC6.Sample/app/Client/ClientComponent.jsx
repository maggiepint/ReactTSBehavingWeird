"use strict";
/// <reference path="/React.MVC6.Sample/typings/main/ambient/react/index.d.ts" />
const React = require('react');
class ClientSideMessage extends React.Component {
    render() {
        return (<div> {this.props.message} </div>);
    }
}
module.exports = ClientSideMessage;
