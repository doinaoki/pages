import * as React from "react";
import {
  AppNavBar,
  setItemActive
} from "baseui/app-nav-bar";
import {
  ChevronDown,
  Delete,
  Overflow,
  Upload
} from "baseui/icon";

export default function Topbar () {
  const [mainItems, setMainItems] = React.useState([]);
  return (
    <AppNavBar
      title="Doi's Page"
      onMainItemSelect={item => {
        setMainItems(prev => setItemActive(prev, item));
      }}
      onUserItemSelect={item => console.log(item)}
    />
  );
}