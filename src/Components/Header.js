import React, { Component } from "react";
import { Button, Menu } from "semantic-ui-react";

class Header extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu size="large">
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="serie a"
          active={activeItem === "serie a"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="la liga"
          active={activeItem === "la liga"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="bundesliga"
          active={activeItem === "bundesliga"}
          onClick={this.handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary>Log In</Button>
          </Menu.Item>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
}

export default Header;
