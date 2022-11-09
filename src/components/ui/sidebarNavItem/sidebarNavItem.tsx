import React from "react";
import SidebarNavItemStyles from "./_sidebarNavItem.module.scss";

export interface SidebarNavItemProps {
  children: React.ReactNode;
  navlink: string,
  active?: string
}

export default function SidebarNavItem(props: SidebarNavItemProps) {
  return (
    <li className={SidebarNavItemStyles.sidebar__navItem}>
        <a className={SidebarNavItemStyles.sidebar__navLink} href={`# ${props.navlink}`}>
            {props.children}
        </a>
       {/*  <a className={props.active ? SidebarNavItemStyles["sidebar__navLink--active"] : SidebarNavItemStyles.sidebar__navLink} href={props.navlink}>
            {props.children}
        </a> */}
    </li>
  );
}
