import React from "react";

export default function Wrapper(Comp) {
  return class WrapperComp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        errors: ""
      };
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      this.setState({
        errors: "errors"
      });
    }

    handleChange(e) {
      const key = e.target.name;
      const val = e.target.value;
      console.log(key, val);
      this.setState({ [key]: val });
    }

    render() {
      return (
        <Comp
          state={this.state}
          {...this.props}
          handleChange={this.handleChange}
        />
      );
    }
  };
}
