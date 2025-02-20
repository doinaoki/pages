import * as React from "react";
import { useNavigate } from 'react-router-dom';
import { Navigation } from "baseui/side-navigation";

const path = "/pages/#"

export default function Sidebar() {
  const storedId = localStorage.getItem("sidebar-active-item") || path;
  const [id, setId] = React.useState(storedId);
  console.log(id);
  React.useEffect(() => {
    localStorage.setItem("sidebar-active-item", id);
  }, [id]);
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
          console.log(item)
          setId(item.itemId)
        }
        }
      />
    );
}