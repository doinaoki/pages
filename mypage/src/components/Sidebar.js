import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Navigation } from "baseui/side-navigation";

export default function Sidebar() {
  return (
    <Navigation
      items={[
        {
            title: "Home",
            itemId: "/",
        },
        {
            title: "programming",
            itemId: "/programming",
        },
        {
            title: "study",
            itemId: "/study",
        }
      ]}
      activeItemId={window.location.pathname}
      onChange={({ item }) =>
      {
        console.log(item)
      }
      }
    />
  );
}