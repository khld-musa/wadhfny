import React from 'react'
import { Link } from 'react-router-dom'

function ResetPassword() {
  return (
    <body data-kt-name="metronic" id="kt_body" class="app-blank app-blank">
        <div className="form d-flex flex-column flex-lg-row flex-column-fluid">
          {/*begin::Body*/}
          <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
            {/*begin::Form*/}
            <div className="d-flex flex-center flex-column flex-lg-row-fluid">
              {/*begin::Wrapper*/}
              <div className="w-lg-500px p-10 bg-light form-1">
                {/*begin::Form*/}
                <form
                  className=" w-100"
          
                >
                  {/*begin::Heading*/}
                  <div className="text-center mb-10">
                    {/*begin::Title*/}
                    <h1 className="text-dark fw-bolder mb-3">Setup New Password</h1>
                    {/*end::Title*/}
                    {/*begin::Link*/}
                    <div className="text-gray-500 fw-semibold fs-6">
                      Have you already reset the password ?
                      <Link
                        to="/login"
                        className="link-success px-5 fw-bold"
                      >
                        Sign in
                      </Link>
                    </div>
                    {/*end::Link*/}
                  </div>
                  {/*begin::Heading*/}
                  {/*begin::Input group*/}
                  <div className="fv-row mb-8" data-kt-password-meter="true">
                    {/*begin::Wrapper*/}
                    <div className="mb-1">
                      {/*begin::Input wrapper*/}
                      <div className="position-relative mb-3">
                        <input
                          className="form-control bg-transparent"
                          type="password"
                          placeholder="Password"
                          name="password"
                          autoComplete="off"
                        />
                        <span
                          className="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
                          data-kt-password-meter-control="visibility"
                        >
                          <i className="bi bi-eye-slash fs-2" />
                          <i className="bi bi-eye fs-2 d-none" />
                        </span>
                      </div>
                    </div>
                    {/*end::Wrapper*/}
                    {/*begin::Hint*/}
                    <div className="text-muted">
                      Use 8 or more characters with a mix of letters, numbers &amp;
                      symbols.
                    </div>
                    {/*end::Hint*/}
                  </div>
                  {/*end::Input group=*/}
                  {/*end::Input group=*/}
                  <div className="fv-row mb-8">
                    {/*begin::Repeat Password*/}
                    <input
                      type="password"
                      placeholder="Repeat Password"
                      name="confirm-password"
                      autoComplete="off"
                      className="form-control bg-transparent"
                    />
                    {/*end::Repeat Password*/}
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Input group=*/}
                  <div className="fv-row mb-8">
                    <label className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="toc"
                        defaultValue={1}
                      />
                      <span className="form-check-label fw-semibold text-gray-700 fs-6 ms-1">
                        I Agree &amp;
                        <Link to="#" className="ms-1 link-success">
                          Terms and conditions
                        </Link>
                        .
                      </span>
                    </label>
                  </div>
                  {/*end::Input group=*/}
                  {/*begin::Action*/}
                  <div className="d-grid mb-10 btn">

                    <Link
                      to="/login"
                      className=" text-light"
                    >
                      Submit
                    </Link>

                  </div>
                  {/*end::Action*/}
                </form>
                {/*end::Form*/}
              </div>
              {/*end::Wrapper*/}
            </div>
            {/*end::Form*/}
            {/*begin::Footer*/}
  
          </div>
          {/*end::Body*/}
          {/*begin::Aside*/}

        </div>
        {/*end::Authentication - New password*/}
    

    </body>
  )
}

export default ResetPassword