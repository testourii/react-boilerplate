import React from "react";

const LoginPage = () => {
  return (
    <section
      id="wrapper"
      className="login-register login-sidebar"
      style={{
        backgroundImage: "url(../assets/images/background/register1.jpg)",
        width: "100%",
        height: "100%",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {" "}
      <div className="login-box card">
        <div className="card-body">
          <br />
          <br />
          <br />
          <br />
          <br />
          <form className="form-horizontal form-material" id="loginform">
            <a href="javascript:void(0)" className="text-center db">
              <img
                src="../assets/images/logo-icon1.png"
                width="25%"
                height="15%"
                alt="Home"
              />
              <br />
              <img src="../assets/images/logo-text1.png" alt="Home" />
            </a>
            <div className="form-group m-t-40">
              <div className="col-xs-12">
                <input
                  className="form-control"
                  type="text"
                  required
                  placeholder="Username"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12">
                <input
                  className="form-control"
                  type="password"
                  required
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="form-group">
              <div className="d-flex no-block align-items-center">
                <div className="ml-auto"></div>
              </div>
            </div>
            <div className="form-group text-center m-t-20">
              <div className="col-xs-12">
                <button
                  className="btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light"
                  type="submit"
                >
                  Log In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
