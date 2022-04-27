import React from "react";
import Navigations from "../navigations/Navigations";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { menusState, onOpenMenu } from "../../reducers/menuSlice";
function Layout({ children }) {
  const { isOpen } = useSelector(menusState);
  const dispatch = useDispatch();
  return (
    <div className="layout">
      <div className="btn-menu" onClick={() => dispatch(onOpenMenu())}>
        {isOpen ? (
          <i className="fa-solid fa-bars"></i>
        ) : (
          <i className="fa-solid fa-x"></i>
        )}
      </div>
      <Navigations />
      <div>{children}</div>
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
