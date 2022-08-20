import Drawer from "../../atoms/drawer/Drawer";

export default function Menu() {
  const menus = [
    {
      name: "app",
      path: "app",
    },
    {
      name: "cli",
      path: "cli",
    },
    {
      name: "clipboard",
      path: "clipboard",
    },
  ];
  return <Drawer menus={menus} />;
}
