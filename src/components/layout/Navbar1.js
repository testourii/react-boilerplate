import React, { Fragment } from "react";

const Navbar = () => {
  const firstConnect = false;
  return (
    <div>
      {/* ============================================================== */}
      <header className="topbar">
        <nav className="navbar top-navbar navbar-expand-md navbar-light">
          {/* ============================================================== */}
          {/* Logo */}
          {/* ============================================================== */}
          <div className="navbar-header">
            <a className="navbar-brand">
              {/* Logo icon */}
              <b>
                <img
                  src="../assets/images/logo-light-icon1.png"
                  alt="homepage"
                  width="50"
                  height="30"
                  className="light-logo"
                />
              </b>
              {/*End Logo icon */}
              {/* Logo text */}
              <span>
                {/* dark Logo text */}

                {/* Light Logo text */}
                <img
                  src="../assets/images/logo-light-text1.png"
                  className="light-logo"
                  alt="homepage"
                />
              </span>{" "}
            </a>
          </div>
          {/* ============================================================== */}
          {/* End Logo */}
          {/* ============================================================== */}
          <div className="navbar-collapse">
            {/* ============================================================== */}
            {/* toggle and nav items */}
            {/* ============================================================== */}
            <ul className="navbar-nav mr-auto mt-md-0">
              {/* This is  */}
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link nav-toggler hidden-md-up text-muted waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="mdi mdi-menu" />
                </a>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <a
                  className="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark"
                  href="javascript:void(0)"
                >
                  <i className="ti-menu" />
                </a>{" "}
              </li>
              {/* ============================================================== */}
              {/* Messages */}
              {/* ============================================================== */}
              {firstConnect ? (
                <Fragment></Fragment>
              ) : (
                <li className="nav-item dropdown mega-dropdown">
                  {" "}
                  <a
                    className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                    href="#"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-view-grid" />
                  </a>
                </li>
              )}
              {/* ============================================================== */}
              {/* End Messages */}
              {/* ============================================================== */}
            </ul>
            {/* ============================================================== */}
            {/* User profile and search */}
            {/* ============================================================== */}
            <ul className="navbar-nav my-lg-0">
              {/* ============================================================== */}
              {/* Profile */}
              {/* ============================================================== */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle text-muted waves-effect waves-dark"
                  href="#"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src="../assets/images/users/9.jpg"
                    alt="user"
                    className="profile-pic"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {/* ============================================================== */}
      {/* End Topbar header */}
      {/* ============================================================== */}
      {/* ============================================================== */}
      {/* Left Sidebar - style you can find in sidebar.scss  */}
      {/* ============================================================== */}
      <aside className="left-sidebar">
        {/* Sidebar scroll*/}
        <div className="scroll-sidebar">
          {/* User profile */}
          <div
            className="user-profile"
            style={{
              background:
                "url(../assets/images/background/user-info.jpg) no-repeat",
            }}
          >
            {/* User profile image */}
            <div className="profile-img">
              {" "}
              <img src="../assets/images/users/9.jpg" alt="user" />{" "}
            </div>
            {/* User profile text*/}
            <div className="profile-text">
              {" "}
              <a
                href="#"
                className="dropdown-toggle u-dropdown"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="true"
              >
                username{" "}
              </a>
              <div className="dropdown-menu animated flipInY">
                {" "}
                {firstConnect ? (
                  <Fragment></Fragment>
                ) : (
                  <Fragment>
                    <a href="#" className="dropdown-item">
                      <i className="ti-settings" /> Account Settings
                    </a>{" "}
                    <div className="dropdown-divider" />
                  </Fragment>
                )}
                <a href="login.html" className="dropdown-item">
                  <i className="fa fa-power-off" /> Logout
                </a>{" "}
              </div>
            </div>
          </div>
          {/* End User profile text*/}
          {/* Sidebar navigation*/}
          <nav className="sidebar-nav">
            {firstConnect ? (
              <Fragment></Fragment>
            ) : (
              <ul id="sidebarnav">
                <li className="nav-small-cap">MISSIONS</li>
                <li>
                  {" "}
                  <a
                    className=" waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-skip-next" />
                    <span className="hide-menu">next missions</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className=" waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-skip-previous" />
                    <span className="hide-menu">previous missions</span>
                  </a>
                </li>
                <li>
                  {" "}
                  <a
                    className=" waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-video" />
                    <span className="hide-menu">live missions</span>
                  </a>
                </li>
                <li className="nav-devider" />
                <li className="nav-small-cap">PERSONAL</li>
                <li>
                  {" "}
                  <a
                    className=" waves-effect waves-dark"
                    href="#"
                    aria-expanded="false"
                  >
                    <i className="mdi mdi-account" />
                    <span className="hide-menu">My account settings</span>
                  </a>
                </li>
                <li className="nav-devider" />
              </ul>
            )}{" "}
          </nav>
          {/* End Sidebar navigation */}
        </div>
        {/* End Sidebar scroll*/}
        {/* Bottom points*/}
        <div className="sidebar-footer">
          {
            /* item*/
            firstConnect ? (
              <Fragment></Fragment>
            ) : (
              <a
                href="#"
                className="link"
                data-toggle="tooltip"
                title="Settings"
              >
                <i className="ti-settings" />
              </a>
            )
          }
          {/* item*/}
          <a href="#" className="link" data-toggle="tooltip" title="Logout">
            <i className="mdi mdi-power" />
          </a>{" "}
        </div>
        {/* End Bottom points*/}
      </aside>
      {/* ============================================================== */}
    </div>
  );
};

export default Navbar;
