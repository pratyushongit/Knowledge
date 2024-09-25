import React, { Component } from "react";
import Child from "./Child";
import ErrorBoundary from "./ErrorBoundary";

export class Lifecycle extends Component {
  // Mounting
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.count !== prevState.count) return { count: nextProps.count };
    return null;
  }

  render() {
    console.log("render");
    return (
      <>
        <div>Lifecycle</div>
        <ErrorBoundary>
          <Child count={this.state.count} />
        </ErrorBoundary>
        <button onClick={() => this.setState((c) => c + 1)}>Click</button>
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  //Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
  }

  //Unmounting
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
}

export default Lifecycle;
