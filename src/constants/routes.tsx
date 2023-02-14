import React from "react";
import { TagOutlined, PushpinOutlined } from "@ant-design/icons";
import { PageGroupType, PageType } from "../types/route";
import Page from "../containers/CMS/components/Page";

export enum GroupRoute {
  SystemManagement = "system-management",
}

export const ROUTES = {
  ADMIN_DASHBOARD_PAGE: "/",
  USER_LOGIN: "/user/login",
  TABLE_PAGE: "/system-management/table-page",
  CHART_PAGE: "/system-management/chart-page",
};

export const SideRoutesMap: Array<PageGroupType> = [
  {
    title: "System Management",
    icon: <PushpinOutlined />,
    root: GroupRoute.SystemManagement,
    subPages: [
      {
        title: "Home Page",
        icon: <TagOutlined />,
        Component: () => <div>xxxx</div>,
        path: ROUTES.ADMIN_DASHBOARD_PAGE,
        display: false,
      },
      {
        title: "Table Page",
        icon: <TagOutlined />,
        Component: <Page value="Table Index" />,
        path: ROUTES.TABLE_PAGE,
        display: true,
      },
      {
        title: "Chart Page",
        icon: <TagOutlined />,
        Component: <Page value="Chart Index" />,
        path: ROUTES.CHART_PAGE,
        display: true,
      },
    ],
  },
];

const PageRoutes: Array<PageType> = [];
SideRoutesMap.forEach((route) => {
  const { subPages = [] } = route;
  subPages.forEach((sub) => {
    PageRoutes.push({
      ...sub,
      group: {
        title: route.title,
        root: route.root,
      },
    });
  });
});

export default { SideRoutesMap, PageRoutes };
