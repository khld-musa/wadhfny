import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {



  return (
    <body data-kt-name="metronic" id="kt_body" class=" app-blank app-blank">
      
        <div className="form d-flex flex-column flex-lg-row flex-column-fluid">
          {/*begin::Body*/}
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            {/*begin::Form*/}
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              {/*begin::Wrapper*/}
              <div className="w-lg-500px p-10 bg-light form-1">
                {/*begin::Form*/}
                <form
                  className=" w-100 "
                  action="#"
                >
                  {/*begin::Heading*/}
                  <div className="text-center mb-11">
                    {/*begin::Title*/}
                    <h1 className="text-dark fw-bolder mb-3">Sign In</h1>
                    {/*end::Title*/}
                    {/*begin::Subtitle*/}
                    <div className="text-gray-500 fw-semibold fs-6">
                      Your Social Campaigns
                    </div>
                    {/*end::Subtitle=*/}
                  </div>
                  {/*begin::Heading*/}
                  {/*begin::Login options*/}
                  <div className="row g-3 mb-9">
                    {/*begin::Col*/}
                    <div className="col-md-6">
                      {/*begin::Google link=*/}
                      <Link
                        to="#"
                        className="btn btn-flex  btn-outline btn-text-gray-700 btn-active-color-success bg-state-light flex-center text-nowrap w-100"
                      >
                        <i class="fa-brands fa-google"></i>
                        Sign in with Google
                      </Link>
                      {/*end::Google link=*/}
                    </div>
                    {/*end::Col*/}
                    {/*begin::Col*/}
                    <div className="col-md-6 ">
                      {/*begin::Google link=*/}
                      <Link
                        to="#"
                        className="btn btn-flex btn-outline btn-text-gray-700 btn-active-color-success bg-state-light flex-center text-nowrap w-100"
                      >
                        <i class="fa-brands fa-apple "></i>
                        Sign in with Apple
                      </Link>
                      {/*end::Google link=*/}
                    </div>
                    {/*end::Col*/}
                  </div>
                  {/*end::Login options*/}
                  {/*begin::Separator*/}
                  <div className="separator separator-content my-14">
                    <span className="w-125px text-gray-500 fw-semibold fs-7">
                      Or with email
                    </span>
                  </div>
                  {/*end::Separator*/}
                  {/*begin::Input group=*/}
                  <div className="fv-row mb-8">
                    {/*begin::Email*/}
                    <input
                      type="text"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Email*/}
                  </div>
                  {/*end::Input group=*/}
                  <div className="fv-row mb-3">
                    {/*begin::Password*/}
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Password*/}
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Wrapper*/}
                  <div className="d-flex flex-stack flex-wrap gap-3 fs-base fw-semibold mb-8">
                    <div />
                    {/*begin::Link*/}
                    <Link
                      to="/forgetPassword"
                      className="link-success"
                    >
                      Forgot Password ?
                    </Link>
                    {/*end::Link*/}
                  </div>
                  {/*end::Wrapper*/}
                  {/*begin::Submit button*/}
                  <div className="d-grid mb-10 btn ">
                  
                    <Link
                      to="/"
                      className="link-light"
                    >
                      Sign in
                    </Link>
      
          
                  </div>
                  {/*end::Submit button*/}
                  {/*begin::Sign up*/}
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Not a Member yet?
                    <Link
                      to="/register"
                      className="px-5 link-success"
                    >
                      Sign up
                    </Link>
                  </div>
                  {/*end::Sign up*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Wrapper*/}
            </div>

          </div>
        </div>
        {/*end::Authentication - Sign-in*/}
  

    </body>
  )
}

export default RegisterScreen