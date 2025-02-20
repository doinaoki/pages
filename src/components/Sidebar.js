import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Navigation } from "baseui/side-navigation";

const path = "/pages/#"

export default function Sidebar() {
  const storedId = window.location.href.replace(window.location.origin, "");
  const [id, setId] = React.useState(storedId);
  return (
      <Navigation
        items={[
          {
              title: "Home",
              itemId: "/pages/#",
          },
          {
              title: "programming",
              itemId: "/pages/#/programming",
          },
          {
              title: "study",
              itemId: "/pages/#/study",
          }
        ]}
        activeItemId={id}
        onChange={({ item }) =>
        {
          setId(item.itemId)
        }
        }
      />
    );
}