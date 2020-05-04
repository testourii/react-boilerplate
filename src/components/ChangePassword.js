import React from "react";
import Navbar from "./layout/Navbar1";

const ChangePassword = () => {
  return (
    <body class="fix-header fix-sidebar card-no-border">
      {" "}
      <div id="main-wrapper">
        <Navbar />
        <div class="page-wrapper">
          <div class="container-fluid">
            <br></br>
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-outline-info">
                  <div className="card-header">
                    <h4 className="m-b-0 text-white">Change your Password</h4>
                  </div>
                  <div className="card-body">
                    <form action="#">
                      <div className="form-body">
                        <div className="row p-t-20">
                          <div className="col-md-12">
                            <div className="form-group">
                              <label className="control-label">
                                Current password
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder=""
                                data-validation-regex-regex="((http[s]?|ftp[s]?):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*"
                                data-validation-regex-message="Password not valid"
                              />
                              <small className="form-control-feedback">
                                Type your default password
                              </small>
                            </div>
                          </div>
                        </div>
                        <div className="row p-t-20">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label className="control-label">
                                New password
                              </label>
                              <input
                                type="text"
                                id="firstName"
                                className="form-control"
                                placeholder=""
                              />
                              <small className="form-control-feedback">
                                New password must be different than the old one
                              </small>
                            </div>
                          </div>
                          {/*/span*/}
                          <div className="col-md-6">
                            <div className="form-group ">
                              <label className="control-label">
                                Confirm your new password
                              </label>
                              <input
                                type="text"
                                id="lastName"
                                className="form-control "
                                placeholder=""
                              />
                            </div>
                          </div>
                          {/*/span*/}
                        </div>
                        {/*/row*/}
                        {/*/row*/}
                      </div>
                      <div className="form-actions p-t-20">
                        <button type="submit" className="btn btn-success ">
                          <i className="fa fa-check" /> Change password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default ChangePassword;
