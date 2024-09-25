import React, { Component } from "react";

export class Child extends Component {
  // Mounting
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log("constructor child");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps child");
    if (nextProps.count !== prevState.count) return { count: nextProps.count };
    return null;
  }

  render() {
    console.log("render child");
    const { count } = this.props;
    return (
      <>
        <div>Child</div>
        {count}
      </>
    );
  }

  componentDidMount() {
    console.log("componentDidMount child");
  }

  //Updating
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate child");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate child");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate child");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount child");
  }
}

export default Child;
