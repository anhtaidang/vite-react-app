import React from "react";
import {
  TagOutlined,
  PushpinOutlined,
  CodeSandboxOutlined,
} from "@ant-design/icons";
import { PageGroupType, PageType } from "~/types/route";

const Page = React.lazy(() => import("../containers/CMS/components/Page"));
const PageBuilder = React.lazy(
  () => import("../containers/CMS/pages/PageBuilder")
);

export enum GroupRoute {
  SystemManagement = "system-management",
}

const CMS_ROUTE = "/cms";

export const ROUTES = {
  CMS: CMS_ROUTE,
  ADMIN_DASHBOARD_PAGE: CMS_ROUTE,
  USER_LOGIN: `${CMS_ROUTE}/user/login`,
  TABLE_PAGE: `${CMS_ROUTE}/${GroupRoute.SystemManagement}/table-page`,
  CHART_PAGE: `${CMS_ROUTE}/${GroupRoute.SystemManagement}/chart-page`,
  PAGE_BUILDER: `${CMS_ROUTE}/${GroupRoute.SystemManagement}/page-builder`,
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
        Component: Page,
        path: ROUTES.ADMIN_DASHBOARD_PAGE,
        display: false,
      },
      {
        title: "Table Page",
        icon: <TagOutlined />,
        Component: Page,
        path: ROUTES.TABLE_PAGE,
        display: true,
      },
      {
        title: "Chart Page",
        icon: <TagOutlined />,
        Component: Page,
        path: ROUTES.CHART_PAGE,
        display: true,
      },
      {
        title: "Page Builder",
        icon: <CodeSandboxOutlined />,
        Component: PageBuilder,
        path: ROUTES.PAGE_BUILDER,
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
