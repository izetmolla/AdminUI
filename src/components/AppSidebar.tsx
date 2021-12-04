import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { AppSidebarNav } from "./AppSidebarNav";

import { logoNegative } from "../assets/brand/logo-negative";
import { sygnet } from "../assets/brand/sygnet";

import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

// sidebar nav config
import navigation from "../_nav";
import { AppState } from "../redux/store";
import { TOOGLE_NAVIGATION, TOOGLE_UNFOLDABLE } from "../types/actions/Common.action";

const AppSidebar = () => {
  const dispatch = useDispatch();
  const common = useSelector<AppState, AppState["common"]>(
    ({ common }) => common
  );

  console.log(common);
  return (
    <CSidebar
      position="fixed"
      unfoldable={common.sidebarUnfoldable}
      visible={common.sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: TOOGLE_NAVIGATION, sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex">
        <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} />
        <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() =>
          dispatch({ type: TOOGLE_UNFOLDABLE, sidebarUnfoldable: !common.sidebarUnfoldable })
        }
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
