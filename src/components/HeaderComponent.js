import React from "react";
import { Header, Menu } from "antd/lib/layout/layout";

export default function HeaderComponent() {
  return (
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {/* {new Array(5).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })} */}
      </Menu>
    </Header>
  );
}
