import React, { PureComponent } from "react";
import { Button } from "antd";

export default class AddButton extends PureComponent {
  render() {
    return (
      <Button
        onClick={() => {
          this.props.incrementCounter();
        }}
      >
        Add Button
      </Button>
    );
  }
}
