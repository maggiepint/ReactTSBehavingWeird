/// <reference path="/React.MVC6.Sample/typings/main/ambient/react/index.d.ts" />
import React = require('react');

interface ClientSideProps extends React.Props<any> {
    message: string;
}

class ClientSideMessage extends React.Component<ClientSideProps, {}> {
    render() {
        return (
            <div> { this.props.message } </div>
        );
    }
}

export = ClientSideMessage;