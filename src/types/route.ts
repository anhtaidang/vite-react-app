import React from "react";

export enum RouteType {
  Group = "Group",
  Link = "Link",
  SubLink = "SubLink",
}

export type PageRouteType = {
  [key: string]: string;
};

export type PageType = {
  title: string;
  icon?: React.ReactElement;
  Component: React.ComponentType | JSX.Element;
  path: string;
  display: boolean;
  group?: PageGroupType;
};

export type PageGroupType = {
  title: string;
  root: string;
  icon?: JSX.Element;
  subPages?: PageType[];
};
