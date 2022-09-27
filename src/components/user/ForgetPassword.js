import React from 'react'

function ForgetPassword() {
  return (
  
	<body data-kt-name="metronic" id="kt_body" class="app-blank app-blank">

      <div className="d-flex flex-column flex-root" id="kt_app_root">
  {/*begin::Authentication - Password reset */}
  <div className="d-flex flex-column flex-lg-row flex-column-fluid">
    {/*begin::Body*/}
    <div className="d-flex flex-column flex-lg-row-fluid w-lg-50 p-10 order-2 order-lg-1">
      {/*begin::Form*/}
      <div className="d-flex flex-center flex-column flex-lg-row-fluid">
        {/*begin::Wrapper*/}
        <div className="w-lg-500px p-10">
          {/*begin::Form*/}
          <form
            className="form w-100"
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
              <button
                type="button"
                id="kt_password_reset_submit"
                className="btn btn-primary me-4"
              >
                {/*begin::Indicator label*/}
                <span className="indicator-label">Submit</span>
                {/*end::Indicator label*/}
                {/*begin::Indicator progress*/}
                <span className="indicator-progress">
                  Please wait...
                  <span className="spinner-border spinner-border-sm align-middle ms-2" />
                </span>
                {/*end::Indicator progress*/}
              </button>
              <a
                href="/login"
                className="btn btn-light"
              >
                Cancel
              </a>
            </div>
            {/*end::Actions*/}
          </form>
          {/*end::Form*/}
        </div>
        {/*end::Wrapper*/}
      </div>
      {/*end::Form*/}
      {/*begin::Footer*/}
      <div className="d-flex flex-center flex-wrap px-5">
        {/*begin::Links*/}
        <div className="d-flex fw-semibold text-primary fs-base">
          <a
            href="../../demo1/dist/pages/team.html"
            className="px-5"
            target="_blank"
          >
            Terms
          </a>
          <a
            href="../../demo1/dist/pages/pricing/column.html"
            className="px-5"
            target="_blank"
          >
            Plans
          </a>
          <a
            href="../../demo1/dist/pages/contact.html"
            className="px-5"
            target="_blank"
          >
            Contact Us
          </a>
        </div>
        {/*end::Links*/}
      </div>
      {/*end::Footer*/}
    </div>
    {/*end::Body*/}
    {/*begin::Aside*/}
  
  </div>
  {/*end::Authentication - Password reset*/}
</div>

    </body>
  )
}

export default ForgetPassword