import React, { useState, Fragment } from "react";
import animate__fadeInBottomLeft from "animate.css";
import video from "./video.mp4";
const Login = () => {
  const [USBauth, setUSBauth] = useState(false);
  return (
    <div>
      <section className='showcase'>
        <div className='video-container' onClick={() => setUSBauth(!USBauth)}>
          <video src={video} autoPlay muted loop />

          <div className='form-group text-center m-t-20'>
            <div className='col-xs-6'>
              <button
                style={{ zIndex: 3 }}
                className='btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light'
                type='submit'
                hidden={!USBauth}
              >
                Hide it (just for test)
              </button>
            </div>
          </div>
        </div>
        <div
          className='containerr animated fadeInDown animatedfadeInDown '
          hidden={!USBauth}
        >
          <div className='login-register'>
            <div className='login-box card'>
              <div className='card-body'>
                <form className='form-horizontal form-material' id='loginform'>
                  <h3 className='box-title m-b-20'>Sign In</h3>
                  <div className='form-group '>
                    <div className='col-xs-12'>
                      <input
                        className='form-control'
                        type='text'
                        required
                        placeholder='Username'
                      />{" "}
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-xs-12'>
                      <input
                        className='form-control'
                        type='password'
                        required
                        placeholder='Password'
                      />{" "}
                    </div>
                  </div>

                  <div className='form-group text-center m-t-20'>
                    <div className='col-xs-12'>
                      <button
                        className='btn btn-info btn-lg btn-block text-uppercase waves-effect waves-light'
                        type='submit'
                      >
                        Log In
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
