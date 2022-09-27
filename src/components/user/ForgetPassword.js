import React from 'react'
import { Link } from 'react-router-dom'

function ForgetPassword() {
  return (

    <body data-kt-name="metronic" id="kt_body" class="app-blank app-blank">

   
        {/*begin::Authentication - Password reset */}
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
                  noValidate="novalidate"
                  id="kt_password_reset_form"
                  data-kt-redirect-url="../../demo1/dist/authentication/layouts/corporate/new-password.html"
                  action="#"
                >
                  {/*begin::Heading*/}
                  <div className="text-center mb-10">
                    {/*begin::Title*/}
                    <h1 className="text-dark fw-bolder mb-3">Forgot Password ?</h1>
                    {/*end::Title*/}
                    {/*begin::Link*/}
                    <div className="text-gray-500 fw-semibold fs-6">
                      Enter your email to reset your password.
                    </div>
                    {/*end::Link*/}
                  </div>
                  {/*begin::Heading*/}
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
                  {/*begin::Actions*/}
                  <div className="d-flex flex-wrap justify-content-center pb-lg-0">
                    <div className="btn me-4">
                      <Link
                        to="/passwordReset"
                        className='text-light'
                      >
                        Submit
                      </Link>
                    </div>
                    <Link
                      to="/login"
                      className="btn btn-danger"
                    >
                      Cancel
                    </Link>
                  </div>
                  {/*end::Actions*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Form*/}
          </div>
          {/*end::Body*/}
          {/*begin::Aside*/}

        </div>
        {/*end::Authentication - Password reset*/}


    </body>
  )
}

export default ForgetPassword