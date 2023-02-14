import React from "react";
import { Menu, MenuProps } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link } from "react-router-dom";
import { GroupRoute, SideRoutesMap } from "../../../constants/routes";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(item: {
  label: React.ReactNode;
  key: React.Key;
  icon?: React.ReactNode;
  children?: MenuItem[];
  type?: "group";
}): MenuItem {
  return {
    ...item,
  } as MenuItem;
}

interface Props {
  collapsed: boolean;
}

const SiderMenu: React.FC<Props> = ({ collapsed }) => {
  const sideMenuItems = React.useMemo(() => {
    return SideRoutesMap.map((item, indexGroup) => {
      return getItem({
        icon: item.icon,
        key: `${item.root}-${indexGroup}`,
        label: <Link to="">{item.title}</Link>,
        children: item.subPages
          ?.filter((f) => f.display)
          .map((sub, indexSub) =>
            getItem({
              key: `${item.root}-${sub.path}-${indexSub}`,
              label: <Link to={sub.path}>{sub.title}</Link>,
              icon: sub.icon,
            })
          ),
      });
    });
  }, []);
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <div className="logo">
        <span
          style={{
            width: "100%",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            height: "100%",
            color: "white",
            fontWeight: 600,
          }}
        >
          VieON
        </span>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[GroupRoute.SystemManagement]}
        defaultOpenKeys={[SideRoutesMap[0].root]}
        title="Navigation One"
        items={sideMenuItems}
      />
    </Sider>
  );
};

export default SiderMenu;
