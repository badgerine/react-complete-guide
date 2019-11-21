import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({hasError: true, errorMessage: error});
    }

    render() {
        return this.state.hasError ? 
        <h1>Something went left...\n {this.state.errorMessage}</h1> :
        <div>{this.props.children}</div>
    }
}

export default ErrorBoundary;